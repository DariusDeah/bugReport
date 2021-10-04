import { AppState } from '../AppState'
import { BugModel } from '../Models/BugModel'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class BugsService {
  async getBugs() {
    const res = await api.get('api/bugs')
    logger.log(res.data)
    AppState.bugs = res.data.map(b => new BugModel(b))
  }

  async getBugById(bugId) {
    const res = await api.get(`api/bugs/${bugId}`)
    AppState.activeBug = res.data
  }

  async closedBug(bugId, bugData) {
    const res = await api.put(`api/bugs/${bugId}`, bugData)
  }
  async softDelete(bugId) {
    cosnt res = await 
  }
}
export const bugsService = new BugsService()
