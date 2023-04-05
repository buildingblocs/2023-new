export class Institute {
  instId!: string
  name!: string
  address!: string
  isInstitute!: boolean
  isOrganiser!: boolean
  isPublisher!: boolean
  isSchool!: boolean
}

export class Job extends Institute {
  dept!: string
  role!: string
  officeAddr!: string
}
