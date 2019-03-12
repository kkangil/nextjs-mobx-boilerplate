import { Component } from 'react'
import Link from 'next/link'

export default class LoginComponent extends Component {
  render() {
    const {
      id,
      password,
    } = this.props.state

    const {
      handleChange,
      login,
    } = this.props
    return (
      <div>
        <h3>Login</h3>
        <div>
          <input
            type='text'
            name='id'
            placeholder='id'
            value={id}
            onChange={handleChange}
          />
          <input
            type='password'
            name='password'
            placeholder='password'
            value={password}
            onChange={handleChange}
          />
          <button onClick={login}>login</button>
        </div>
        <Link href="/">
          <a>go home</a>
        </Link>
      </div>
    )
  }
}
