import request from 'superagent'
import API from '@/api'

import User from '@/stores/user'
const userStore = new User()

export default {
  login: async function (body) {
    return new Promise((resolve, reject) =>
      request(
        API.AUTH.LOGIN.method,
        API.AUTH.LOGIN.path()
      )
        .send(body)
        .end((err, res) => {
          if (err) reject(res.body)
          else {
            // userStore.setUser(res.body)
            // resolve(userStore.getUser)
            resolve(res.body)
          }
        })
    )
  },
}