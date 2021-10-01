import { bugsService } from '../services/BugsService'
import BaseController from '../utils/BaseController'

export class Bugcontroller extends BaseController {
  constructor() {
    super('api/bugs')
    this.router
      .get('', this.getBugs)
  }

  async getBugs(req, res, next) {
    try {
      const bugs = await bugsService.getBugs()
      res.send(bugs)
    } catch (error) {
      next(error)
    }
  }
}
