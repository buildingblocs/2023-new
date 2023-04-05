import {Project, Submission} from "@/types/project";
import axios from "axios"

import { API_URL } from "./api_constants";

export async function loadProjects(id: string): Promise<Project[]> {
  return await (await fetch(`${API_URL}/projects/${id}`)).json()
}

export async function loadProject(pcode: string): Promise<Project> {
  return await (await fetch(`${API_URL}/project/${pcode}`)).json()
}

export async function loadSubmissions(pcode: string): Promise<Submission[]> {
  return await (await fetch(`${API_URL}/submissions/${pcode}`)).json()
}

export async function updateProject(pcode: string, title: string, abstract: string, reportPdf: string): Promise<Project | null> {
  // update
  let project: Project | null = null;
  await axios.post(`${API_URL}/updateProject`, { pcode, title, abstract, reportPdf }).then(res => {
    const data = res.data;
    if('result' in data && data.result == false) return;
    project = data;
  })
  return project
}
