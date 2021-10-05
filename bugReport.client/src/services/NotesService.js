import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'
import { NoteModel } from '../Models/NoteModel'

class NotesService {
  async getNotesByBugId(bugId) {
    const res = await api.get(`api/bugs/${bugId}/notes`)
    logger.log('this bugs notes', res.data)
    AppState.notes = res.data.map(n => new NoteModel(n))
  }

  async createNote(noteData) {
    const res = await api.post('api/notes', noteData)
    logger.log(res)
    AppState.notes.push(res.data)
  }

  async removedNote(noteId) {
    const res = api.delete(`api/notes/${noteId}`)
    logger.log(res.data)
  }
}
export const notesService = new NotesService()
