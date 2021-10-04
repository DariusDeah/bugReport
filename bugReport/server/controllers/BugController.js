import { Auth0Provider } from '@bcwdev/auth0provider'
import { bugsService } from '../services/BugsService'
import { noteService } from '../services/NoteService'
import { trackedBugsService } from '../services/TrackedBugsService'
import BaseController from '../utils/BaseController'

export class BugController extends BaseController {
  constructor() {
    super('api/bugs')
    this.router
      .get('', this.getBugs)
      .get('/:bugId', this.getBugById)
      .get('/:bugId/trackedbugs', this.getTrackedBugsByBugId)
      .get('/:bugId/notes', this.getNoteByBugId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createBug)
      .put('/:bugId', this.editBug)
      .delete('/:bugId', this.closedBug)
  }

  async getBugs(req, res, next) {
    try {
      const bugs = await bugsService.getBugs()
      res.send(bugs)
    } catch (error) {
      next(error)
    }
  }

  async getBugById(req, res, next) {
    try {
      const bug = await bugsService.getBugById(req.params.bugId)
      res.send(bug)
    } catch (error) {
      next(error)
    }
  }

  async createBug(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const bug = await bugsService.createBug(req.body)
      res.send(bug)
    } catch (error) {
      next(error)
    }
  }

  async editBug(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const bug = await bugsService.editBug(req.body, req.params.bugId)
      res.send(bug)
    } catch (error) {
      next(error)
    }
  }

  async closedBug(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const closedBug = await bugsService.closeBug(req.body, req.params.bugId)
      res.send(closedBug)
    } catch (error) {
      next(error)
    }
  }

  async getNoteByBugId(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const note = await noteService.getNoteByBugId(req.params.bugId)
      res.send(note)
    } catch (error) {
      next(error)
    }
  }

  async getTrackedBugsByBugId(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const trackedBug = await trackedBugsService.trackedBugs(req.params.bugId)
      res.send(trackedBug)
    } catch (error) {
      next(error)
    }
  }
}
