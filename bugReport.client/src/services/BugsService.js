import { AppState } from '../AppState'
import { BugModel } from '../Models/BugModel'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'
// import { TrackedBugModel } from '../Models/TrackedBugModel'
import { TrackersModel } from '../Models/TrackersModel'
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

  async editBug(bugId, bugData) {
    const res = await api.put(`api/bugs/${bugId}`, bugData)
    logger.log(res.data)
    AppState.activeBug = res.data
  }

  async getTrackedBugs(bugId) {
    const res = await api.get(`api/bugs/${bugId}/trackedbugs`)
    logger.log('tracked bugs', res.data)
    AppState.trackedBugs = res.data.map(tb => new TrackersModel(tb.tracker))
  }

  async getUserBugs() {
    const res = await api.get('account/trackedbugs')
    logger.log('tracked bugs', res.data)
    AppState.userBugs = res.data.map(tb => new BugModel(tb.bugs))
    logger.log(AppState.userBugs)
  }
}
export const bugsService = new BugsService()
