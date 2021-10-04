import { dbContext } from '../db/DbContext'

class TrackedBugsService {
  async createBug(bugData) {
    const trackedBug = dbContext.Bugs.create(bugData)
    return trackedBug
  }
}
export const trackedBugsService = new TrackedBugsService()
