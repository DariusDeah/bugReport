export class NoteModel {
  constructor(notedata) {
    this.id = notedata.id
    this.body = notedata.body
    this.creator = notedata.creator
    this.createdAt = notedata.createdAt
  }
}
