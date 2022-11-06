import { Response, Request } from 'express'
import { ListCategoriesUseCase } from './ListCategoriesUseCase'

class listCategoriesController {
  constructor(private ListCategoriesUseCase: ListCategoriesUseCase) {}

  handle(req: Request, res: Response) {
    const all = this.ListCategoriesUseCase.execute()
    return res.json(all)
  }
}

export { listCategoriesController }
