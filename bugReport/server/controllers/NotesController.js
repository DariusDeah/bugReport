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
      .get('api/bugs/:bugId/notes', this.getNoteByBugId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createNote)
      .delete('api/notes/:notesId', this.removedNote)
  }

  // kept my get notes by bug id in the notes controller for  continuity and organization
  async getNoteByBugId(req, res, next) {
    try {
      req.body.creatorId = req.userIfo.id
      const note = noteService.getNoteByBugId(req.params.bugId)
      res.send(note)
    } catch (error) {
      next(error)
    }
  }

  async createNote(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const note = noteService.createNote(req.body)
      res.send(note)
    } catch (error) {
      next(error)
    }
  }

  async removedNote(req, res, next) {
    try {
      req.body.creatorId = req.userIfo.id
      const note = noteService.removedNote()
      res.send(note)
    } catch (error) {
      next(error)
    }
  }
}
