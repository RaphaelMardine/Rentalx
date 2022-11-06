import { Response, Request } from 'express'
import { CreateCategoryService } from './CreateCategoryUseCase'

class CreateCategoryController {
  constructor(private CreateCategoryService: CreateCategoryService) {}
  handle(req: Request, res: Response) {
    const { name, description } = req.body

    this.CreateCategoryService.execute({ name, description })

    return res.status(201).send()
  }
}

export { CreateCategoryController }
