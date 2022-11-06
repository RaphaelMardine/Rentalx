import { Request, Response } from 'express'

import { importCategoryUseCase } from './importCategoryUseCase'

class ImportCategoryController {
  constructor(private importCategoryUseCase: importCategoryUseCase) {}

  handle(req: Request, res: Response): Response {
    const { file } = req
    this.importCategoryUseCase.execute(file)
    return res.send()
  }
}

export { ImportCategoryController }
