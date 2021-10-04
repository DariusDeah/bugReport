import { Auth0Provider } from '@bcwdev/auth0provider'
import { get } from 'mongoose'
import { trackedBugsService } from '../services/TrackedBugsService'
import BaseController from '../utils/BaseController'

export class TrackedBugsController extends BaseController {
  constructor() {
    super('api/trackedbugs')
    this.router
      .get('', this.getUserTrackingBugs)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.bugsAccountTracking)
      .post('api/trackedbugs', this.createBug)
      .delete('', this.removeBug)
  }

  async removeBug(req, res, next) {
    const blah = await trackedBugsService
  }

  async createBug(req, res, next) {
    try {
      req.creatorId = req.userInfo.id
      const trackedBug = await trackedBugsService.createBug(req.body)
      res.send(trackedBug)
    } catch (error) {

    }
  }

  async bugsAccountTracking(req, res, next) {
    const blah = await trackedBugsService
  }

  async getUserTrackingBugs(req, res, next) {
    const blah = await trackedBugsService
  }
}
