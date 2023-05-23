export default interface User {
  email: string
  password: string
  department?: string
  bio?: string
  cluster?: number 
  imageBase64?: string
  interest?: {
    [key: string]: string
  }
}
