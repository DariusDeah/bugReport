import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'
import { NoteModel } from '../Models/NoteModel'

class NotesService {
  async getNotesByBugId(bugId) {
    const res = await api.get(`api/bugs/${bugId}/notes`)
    logger.log(res.data)
    AppState.notes = res.data.map(n => new NoteModel(n))
  }
}
export const notesService = new NotesService()
