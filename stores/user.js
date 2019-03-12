import { action, observable } from 'mobx'

export default class User {
  @observable user = null

  get getUser() {
    return this.user
  }

  @action
  setUser = user => {
    this.user = user
  }
}
