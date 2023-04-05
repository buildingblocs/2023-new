import {Student, Teacher, ExternalStudent, ResearchMentor, dummyTeacher} from "@/types/user";

export class Project {
  pcode!: string
  title!: string
  year!: number
  abstract!: string
  members!: Array<Student | ExternalStudent>
  teacher!: Teacher
  deptId!: string
  reportPdf!: string
  mentors!: ResearchMentor[]
}

export class Award {
  accId!: number
  name!: string
  prize!: string
}

export class Publication {
  accId!: number
  pubTitle!: string
  doi!: string
}

export class ResearchEvent {
  eventId!: string
  year!: string
}

export class Submission extends ResearchEvent {
  code!: string
  members!: Array<Student | ExternalStudent>
  subTitle!: string
  subAbstract!: string
  accs!: Array<Award | Publication>
}


export function dummyProject(): Project {
  return {
    pcode: "",
    title: "",
    year: (new Date()).getFullYear(),
    abstract: "",
    members: [],
    teacher: dummyTeacher(),
    deptId: "",
    reportPdf: ""
  }
}
