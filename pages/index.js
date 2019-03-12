import { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'
import request from 'superagent'
import withData from '@/components/hoc/with-data'

import Head from '@/components/head'
import MainComponent from '@/components/main'

import config from '@/config'
import { getNodeEnv } from '@/utils/env'

@withData
@inject('sampleStore', 'userStore')
@observer
export default class Main extends Component {
  static async getInitialProps(props) {
    let { query } = props
    const env = getNodeEnv()
    const endPoint = env.apiEndPoint || config.apiEndPoint
    // const res = await request('GET', `${endPoint}/v1/notices/main`)
    const res = ''
    return { query, res }
  }

  componentWillMount() {
    this.props.sampleStore.setText('Hello! This is main page')
  }

  render() {
    console.log(this.props)
    console.log(this.props.userStore.getUser)
    const { text } = this.props.sampleStore
    return (
      <Fragment>
        <Head />
        <MainComponent text={text} />
      </Fragment>
    )
  }
}