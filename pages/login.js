import { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'
import withData from '@/components/hoc/with-data'

import AuthActions from '@/actions/auth'

import Head from '@/components/head'
import LoginComponent from '@/components/login'

@withData
@inject('userStore')
@observer
export default class Login extends Component {
  static async getInitialProps(props) {
    let { query } = props
    return { query }
  }

  state = {
    id: '',
    password: ''
  }

  handleChange = e => {
    const state = { ...this.state }

    if (e.target.name) {
      state[e.target.name] = e.target.value
    }

    this.setState(state)
  }

  async login() {
    try {
      await AuthActions.login(this.state)
    } catch (err) {
      alert(err.errorMessage || err.message)
    }
  }

  render() {
    return (
      <Fragment>
        <Head title='login' />
        <LoginComponent
          state={this.state}
          handleChange={this.handleChange}
          login={this.login.bind(this)}
        />
      </Fragment>
    )
  }
}