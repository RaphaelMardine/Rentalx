import { Specification } from '../../model/Specification'
import { ICreateSpecificationDTO } from './ISpecificationRepostory'

class SpecificationsRepository implements SpecificationsRepository {
  private specifications: Specification[]
  constructor() {
    this.specifications = []
  }
  create({ description, name }: ICreateSpecificationDTO) {
    const specifications = new Specification()
    Object.assign(specifications, {
      name,
      description,
      created_at: new Date()
    })
    this.specifications.push(specifications)
  }
  findByName(name: string): Specification {
    const specifications = this.specifications.find(
      specifications => specifications.name === name
    )
    return specifications
  }
}

export { SpecificationsRepository }
