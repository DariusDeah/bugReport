import { dbContext } from '../db/DbContext'
import { bugsService } from './BugsService'

class NoteService {
  async getNoteByBugId(bugId) {
    const note = await dbContext.Notes.find({ bugId: bugId })
    return note
  }

  async createNote(noteData) {
    const note = await dbContext.Notes.create(noteData)
    await note.populate('creator')
    return note
  }

  async removedNote() {
    const note = await dbContext.Notes

    return note
  }
}
export const noteService = new NoteService()
