import { AppState } from '../AppState'
import { BugModel } from '../Models/BugModel'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'
import { convertToQuery } from '../utils/Query'

class BugsService {
  async getBugs() {
    const res = await api.get('api/bugs')
    logger.log(res.data)
    AppState.bugs = res.data.map(b => new BugModel(b))
  }

  async priorityFilter(query) {
    AppState.bugs = await AppState.bugs.filter(b => b.priority === query)
  }

  async getBugById(bugId) {
    const res = await api.get(`api/bugs/${bugId}`)
    AppState.activeBug = (new BugModel(res.data))
  }

  async closedBug(bugId, bugData) {
    const res = await api.put(`api/bugs/${bugId}`, bugData)
  }

  async softDelete(bugId) {
    const res = await api.delete(`api/bugs/${bugId}`)
    AppState.bugs = res.data
  }

  async createBug(bugData) {
    const res = await api.post('api/bugs', bugData)
    logger.log('harrison is sad', res)
    AppState.bugs.push(new BugModel(res.data))
  }
}
export const bugsService = new BugsService()
