import { User, Student, Coauthor, Teacher } from "@/types/user"
import { API_URL } from "./api_constants";

export async function loadStudent(sid: string): Promise<Student> {
  return await (await fetch(`${API_URL}/student/${sid}`)).json()
}

export async function loadCoauthors(sid: string): Promise<Coauthor[]> {
  return await (await fetch(`${API_URL}/coauthors/${sid}`)).json()
}
