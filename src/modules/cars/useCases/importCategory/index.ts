import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'
import { ImportCategoryController } from './importCategoryController'
import { importCategoryUseCase } from './importCategoryUseCase'

const categoriesRepository = CategoriesRepository.getInstance()
const ImportCategoryUseCase = new importCategoryUseCase(categoriesRepository)
const importCategoryController = new ImportCategoryController(
  ImportCategoryUseCase
)

export { importCategoryController }
