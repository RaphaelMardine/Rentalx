interface ICreateSpecificationDTO {
  name: string
  description: string
}

interface SpecificationsRepository {
  create({ description, name }: ICreateSpecificationDTO): void
  findByName(name: string)
}

export { SpecificationsRepository, ICreateSpecificationDTO }
