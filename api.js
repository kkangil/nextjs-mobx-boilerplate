import config from './config'
import { getNodeEnv } from '@/utils/env'

const env = getNodeEnv()
const endPoint = env.apiEndPoint || config.apiEndPoint

export default {
  AUTH: {
    LOGIN: {
      method: 'POST',
      path: () => `${endPoint}/auth/login`
    }
  }
}