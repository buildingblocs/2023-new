import axios from "axios";
import moment from "moment";

export async function loadProjects() {
  let finalData = []
  await axios.post(
      "https://www.ssef.com.sg/website/getProjectListForPublic",
      {
          'project.ordering':'category',
          resultType:'json'
      }
  ).then(function (response) {
      let data = response.data;
      let start = data.indexOf("{");
      let end = data.lastIndexOf("}")+1;
      data = data.slice(start, end).replace("\t", "");
      start = data.indexOf("[");
      end = data.lastIndexOf("]")+1;
      data = JSON.parse(data.slice(start, end)).filter((it) => it.status == 20 || it.status == 60).map(
          (object) => {
              return {
                  projectCode: object.category1 + object.projectCode.toString().padStart(3, "0"),
                  lastUpdated: moment(object.submissionDate, "DD/MM/YYYY hh:mm").toDate(),
                  teamLeader: object.memberName,
                  school: object.school.replace("&#39", "'"),
                  title: object.title.replace("&#39", "'"),
                  status: object.status == 20 ? "Not In Final": "Final"
              }
          }
      );
      finalData = data;
  });
  return finalData;
}
