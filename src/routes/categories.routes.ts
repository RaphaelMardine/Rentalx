import { response, Router } from 'express'
import { Category } from '../modules/cars/model/Category'
import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository'
import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { CreateCategoryService } from '../modules/cars/useCases/createCategory/CreateCategoryUseCase'
import { ListCategoriesController } from '../modules/cars/useCases/listCategories'
const categoriesRoutes = Router()

categoriesRoutes.post('/', (req, res) => {
  return createCategoryController.handle(req, res)
})
categoriesRoutes.get('/', (req, res) => {
  return ListCategoriesController.handle(req, res)
})
export { categoriesRoutes }
