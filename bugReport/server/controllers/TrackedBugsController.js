import { Auth0Provider } from '@bcwdev/auth0provider'
import { get } from 'mongoose'
import { trackedBugsService } from '../services/TrackedBugsService'
import BaseController from '../utils/BaseController'

export class TrackedBugsController extends BaseController {
  constructor() {
    super('api/trackedbugs')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createTrackedBug)
      .delete('', this.removeBug)
  }

  async createTrackedBug(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id
      const trackedBug = await trackedBugsService.createTrackedBug(req.body)
      res.send(trackedBug)
    } catch (error) {
      next(error)
    }
  }

  async removeBug(req, res, next) {
    const blah = await trackedBugsService
  }
}
