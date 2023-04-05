import { Institute, Job } from "./admin"
export class User {
  email!: string
  name!: string
  pfp!: string | null
}

export class Student extends User {
  nush_sid!: string
  gradYear!: number
}

export class Coauthor extends Student {
  count!: number
}

export class Teacher extends User {
  deptId!: string
  isAdmin!: boolean
  isMentor!: boolean
}

export class ExternalStudent {
  email!: string
  name!: string
  emergencyEmail!: string
  teacherName!: string
  schId!: string
}

export class ResearchMentor {
  email!: string
  name!: string
  jobs!: Job[]
}

export function dummyUser(): User {
  return {email: "", name: "", pfp: null}
}
export function dummyStudent(): Student {
  return {email: "", name: "", pfp: null, nush_sid: "", gradYear: (new Date()).getFullYear()}
}
export function dummyTeacher(): Teacher {
  return {email: "", name: "", pfp: null, deptId: "", isAdmin: false, isMentor: false}
}
