import request from '@/utils/tokenSuperagent'
// request with header include token

import API from '@/api'

export default {
  getUser: async function () {
    return new Promise((resolve, reject) =>
      request(
        API.USER.GET.method,
        API.USER.GET.path()
      ).end((err, res) => {
        if (err) reject(res.body)
        else resolve(res.body)
      })
    )
  }
}