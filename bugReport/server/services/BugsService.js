import { dbContext } from '../db/DbContext'

class BugsService {
  async getBugs() {
    const bugs = await dbContext.Bugs.find()
    return bugs
  }

  async getBugById(bugId) {
    const bug = await dbContext.Bugs.find(bugId)
  }
}
export const bugsService = new BugsService()
