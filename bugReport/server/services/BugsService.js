import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'
import { logger } from '../utils/Logger'

class BugsService {
  async getBugs() {
    const bugs = await dbContext.Bugs.find()
    bugs.sort((a, b) => b.updatedAt - a.updatedAt)
    return bugs
  }

  async getBugById(bugId) {
    const bug = await dbContext.Bugs.findById(bugId).populate('creator')
    if (!bug) {
      throw new BadRequest('this bug does not exist')
    }
    return bug
  }

  async createBug(bugData) {
    const bug = await dbContext.Bugs.create(bugData)
    await bug.populate('creator')
    return bug
  }

  async editBug(bugData, bugId) {
    const bug = await this.getBugById(bugId)
    // await bug.populate('creator')
    if (bug.creatorId.toString() !== bugData.creatorId.toString()) {
      throw new Forbidden()
    }

    bug.title = bugData.title || bug.title
    bug.description = bugData.description || bug.description
    bug.priority = bugData.priority || bug.priority
    bug.closed = bugData.closed || bug.closed
    bug.closedDate = bugData.closedDate || bug.closedDate

    await bug.save()
    return bug
  }

  async closeBug(bugData, bugId) {
    const closedBug = await this.getBugById(bugId)
    if (bugData.creatorId.toString() !== closedBug.creatorId.toString) {
      throw new Forbidden()
    }
    bugData.closed = !bugData.closed
    return bugData
  }

  // !Reminder the delete is a soft delete dont actually delete the bug
  // async removed(bugData,) {
  // }
}
export const bugsService = new BugsService()
