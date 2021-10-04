import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class TrackedBugsService {
  async createTrackedBug(bugData) {
    const x = 2
    const trackedBug = await dbContext.TrackedBug.create(bugData)
    await trackedBug.populate('tracker', 'name picture')
    await trackedBug.populate('bug')
    return trackedBug
  }

  async trackedBugs(bugId) {
    const trackedBug = await dbContext.TrackedBug.findById({ bugId: bugId }).populate('tracker')
    if (!trackedBug) {
      throw new BadRequest()
    }
  }
}
export const trackedBugsService = new TrackedBugsService()
