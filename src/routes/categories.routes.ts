import { response, Router } from 'express'
import { Category } from '../model/Category'
import { CategoriesRepository } from '../repositories/CategoriesRepository'
const categoriesRoutes = Router()

const categoriesRepository = new CategoriesRepository()
categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body
  const categoryAlreadyExists = categoriesRepository.findByName(name)
  if (categoryAlreadyExists) {
    return res.status(400).json({ message: 'Category Already Exist' })
  }
  categoriesRepository.create({ name, description })

  return res.status(201).send()
})
categoriesRoutes.get('/', (req, res) => {
  const all = categoriesRepository.list()
  return res.json(all)
})
export { categoriesRoutes }
