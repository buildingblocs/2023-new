import {Project} from "@/types/project";

export default function names(project: Project) {
  return project.members.map((student) => {
      if("nush_sid" in student) {
        return `<a href="/students/${student.nush_sid}">${student.name}</a>`;
      } else return student.name;
    }).join(", ");
}
