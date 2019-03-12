import { Component, Fragment } from 'react'
import { Provider } from 'mobx-react'
import { initStore } from '@/stores'

import Footer from '@/components/footer'

export default ComposedComponent => {
  return class WithData extends Component {
    static async getInitialProps(ctx) {
      let composedInitialProps
      const isServer = !!ctx.req
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx)
      }
      return { isServer, ...composedInitialProps }
    }

    constructor(props) {
      super(props)
      this.store = initStore(props.isServer)
    }

    render() {
      return (
        <Provider {...this.store}>
          <Fragment>
            <ComposedComponent {...this.props} />
            <Footer />
          </Fragment>
        </Provider>
      )
    }
  }
}
