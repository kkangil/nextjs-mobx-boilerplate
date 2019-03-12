import { Component } from 'react'
import { getNodeEnv } from '@/utils/env'
import config from '@/config'

// error occured from nextjs (404)
export default class MyApp extends Component {
  goToMain = () => {
    const env = getNodeEnv()
    const publicUrl = env.publicUrl || config.publicUrl
    window.location.replace(publicUrl)
  }
  render() {
    return (
      <section id="error" className="error user-body">
        <div>
          <div className="error-container">
            <p>404 존재하지 않는 페이지 입니다.</p>
            <button
              onClick={this.goToMain}
            >메인으로</button>
          </div>
        </div>
      </section >
    )
  }
}