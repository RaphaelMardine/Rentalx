import { SpecificationsRepository } from '../repositories/implementations/ISpecificationRepostory'

interface IRequest {
  name: string
  description: string
}
class CreateSpecificationService {
  constructor(private specificationsRepository: SpecificationsRepository) {}
  execute({ name, description }: IRequest) {
    const specificationAlreadyExist =
      this.specificationsRepository.findByName(name)

    if (specificationAlreadyExist) {
      throw new Error('Specification already exists!')
    }
    this.specificationsRepository.create({
      name,
      description
    })
  }
}
export { CreateSpecificationService }
