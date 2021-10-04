import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'
import { bugsService } from './BugsService'

class NoteService {
  async getNoteByBugId(bugId) {
    const note = await dbContext.Notes.find({ bugId: bugId }).populate('creator')
    return note
  }

  async createNote(noteData) {
    const note = await dbContext.Notes.create(noteData)
    await note.populate('creator')
    return note
  }

  async removedNote(noteData, noteId) {
    const removednote = await dbContext.Notes.findById(noteId)
    if (removednote.creatorId.toString() !== noteData.creatorId.toString()) {
      throw new Forbidden()
    }
    if (!removednote) {
      throw new BadRequest()
    }
    await removednote.remove()
    return removednote
  }
}
export const noteService = new NoteService()
