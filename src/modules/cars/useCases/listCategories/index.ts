import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'
import { listCategoriesController } from './ListCategoriesController'
import { ListCategoriesUseCase } from './ListCategoriesUseCase'

const categoriesRepository = CategoriesRepository.getInstance()
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository)
const ListCategoriesController = new listCategoriesController(
  listCategoriesUseCase
)

export { ListCategoriesController }
