import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class BugsService {
  async getBugs() {
    const bugs = await dbContext.Bugs.find()
    return bugs
  }

  async getBugById(bugId) {
    const bug = await dbContext.Bugs.find(bugId)
    if (!bug) {
      throw new BadRequest()
    }
    return bug
  }
}
export const bugsService = new BugsService()
