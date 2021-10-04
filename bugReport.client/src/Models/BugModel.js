export class BugModel {
  constructor(bugData) {
    this.id = bugData.id
    this.creatorId = bugData.creatorId
    this.title = bugData.title
    this.description = bugData.description
    this.priority = bugData.priority
    this.createdAt = bugData.createdAt
    this.closed = bugData.closed
    this.closedDate = bugData.closedDate
    this.updatedAt = bugData.updatedAt
    this.creator = bugData.creator
  }
}
