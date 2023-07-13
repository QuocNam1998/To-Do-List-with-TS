import http from '~/utils/http'
import { TlonginSchema } from '~/utils/rules'

export const registerAccount = (body: TlonginSchema) => http.post('register', body)
