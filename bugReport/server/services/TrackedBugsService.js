import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class TrackedBugsService {
  async getTrackedBug(accountId) {
    const trackedBug = await dbContext.TrackedBug.find({ accountId: accountId }).populate('tracker').populate('bug')
    return trackedBug
  }

  async createTrackedBug(bugData) {
    const trackedBug = await dbContext.TrackedBug.create(bugData)
    await trackedBug.populate('tracker', 'name picture')
    await trackedBug.populate('bug')
    return trackedBug
  }

  async trackedBugs(bugId) {
    const trackedBug = await dbContext.TrackedBug.find({ bugId: bugId }).populate('tracker', 'name picture').populate('bug')
    if (!trackedBug) {
      throw new BadRequest()
    }
    return trackedBug
  }
}
export const trackedBugsService = new TrackedBugsService()
