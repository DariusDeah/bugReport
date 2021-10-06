import { AppState } from '../AppState'
import { TrackedBugModel } from '../Models/TrackedBugModel'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async trackBug() {
    const res = await api.post('api/trackedbugs')
    logger.log(res.data)
    AppState.trackedBugs = res.data
  }
}

export const accountService = new AccountService()
