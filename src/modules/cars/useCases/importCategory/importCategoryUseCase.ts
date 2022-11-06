import fs from 'fs'
import { parse } from 'csv-parse'
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'

interface IImportCategory {
  name: string
  description: string
}
class importCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  loadCategories(file: any): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path)
      const categories: IImportCategory[] = []
      const parseFile = parse()
      stream.pipe(parseFile)
      parseFile
        .on('data', async line => {
          const [name, description] = line
          categories.push({
            name,
            description
          })
        })
        .on('end', () => {
          resolve(categories)
        })
        .on('error', error => {
          reject(error)
        })
    })
  }
  async execute(file: Express.Multer.File) {
    const categories = await this.loadCategories(file)
    console.log(categories)
    categories.map(async category => {
      const { name, description } = category

      const existCategory = this.categoriesRepository.findByName(name)
      if (!existCategory) {
        this.categoriesRepository.create({
          name,
          description
        })
      }
    })
  }
}

export { importCategoryUseCase }