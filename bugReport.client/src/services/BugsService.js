import { AppState } from '../AppState'
import { BugModel } from '../Models/BugModel'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'
import { convertToQuery } from '../utils/Query'
import { TrackedBugModel } from '../Models/TrackedBugModel'

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
    res.data.closed = !res.data.closed
    logger.log('closed object', res.data)
    AppState.bugs = res.data
  }

  async softDelete(bugId) {
    const res = await api.delete(`api/bugs/${bugId}`)
    AppState.bugs = AppState.bugs.filter(b => b.id !== bugId)
  }

  async createBug(bugData) {
    const res = await api.post('api/bugs', bugData)
    logger.log('harrison is sad', res)
    AppState.bugs.push(new BugModel(res.data))
    return res.data
  }

  async getTrackedBugs(bugId) {
    const res = await api.get(`api/bug/${bugId}/trackedbugs`)
    logger.log('tracked bugs', res.data)
    AppState.trackedBugs = res.data.map(tb => new TrackedBugModel(tb))
  }
}
export const bugsService = new BugsService()
