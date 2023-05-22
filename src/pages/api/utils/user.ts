import type Interest from './interest'

export default interface User {
  email: string
  password: string
  cluster?: number 
  imageBase64?: string
  interest?: Interest
}
