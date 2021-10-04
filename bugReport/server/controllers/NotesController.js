import {
  Auth0Provider
} from '@bcwdev/auth0provider'
import {
  noteService
} from '../services/NoteService'
import BaseController from '../utils/BaseController'

export class NotesController extends BaseController {
  constructor() {
    super('api/notes')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createNote)
      .delete('/:noteId', this.removedNote)
  }

  async createNote(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const note = await noteService.createNote(req.body)
      res.send(note)
    } catch (error) {
      next(error)
    }
  }

  async removedNote(req, res, next) {
    try {
      req.body.creatorId = req.userIfo.id
      const removednote = await noteService.removedNote(req.body, req.params.noteId)
      res.send(removednote)
    } catch (error) {
      next(error)
    }
  }
}
