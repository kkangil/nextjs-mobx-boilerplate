import Sample from './sample'
import User from './user'

let store = null

// RootStore combines multiple stores and can share references accross stores
class RootStore {
  constructor() {
    this.sampleStore = new Sample()
    this.userStore = new User()
  }
}

export function initStore(isServer) {
  if (isServer) {
    return new RootStore()
  } else {
    if (store === null) {
      store = new RootStore()
    }
    return store
  }
}
