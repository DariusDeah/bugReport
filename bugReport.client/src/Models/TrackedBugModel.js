export class TrackedBugModel {
  constructor(trackedData) {
    this.tracker = trackedData.tracker
    this.bug = trackedData.bug
    this.accountId = trackedData.accountId
    this.bugId = trackedData.bugId
  }
}
