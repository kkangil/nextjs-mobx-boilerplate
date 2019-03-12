import { action, observable } from 'mobx'

export default class Sample {
  @observable text = ''

  @action
  setText = text => {
    this.text = text
  }
}
