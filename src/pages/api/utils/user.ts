import type Interest from './interest'

export default interface User {
  email: string
  password: string
  interest: Interest
}
