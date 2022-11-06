import { response, Router } from 'express'
import { Category } from '../modules/cars/model/Category'
import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository'
import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { CreateCategoryService } from '../modules/cars/useCases/createCategory/CreateCategoryUseCase'
import { ListCategoriesController } from '../modules/cars/useCases/listCategories'
import multer from 'multer'
import { importCategoryController } from '../modules/cars/useCases/importCategory'

const upload = multer({ dest: './tmp' })

const categoriesRoutes = Router()

categoriesRoutes.post('/', (req, res) => {
  return createCategoryController.handle(req, res)
})
categoriesRoutes.get('/', (req, res) => {
  return ListCategoriesController.handle(req, res)
})
categoriesRoutes.post('/import', upload.single('file'), (req, res) => {
  return importCategoryController.handle(req, res)
})
export { categoriesRoutes }
