export default interface User {
  email: string
  password: string
  update-user-interface3
  department?: string
  bio?: string
  cluster?: number 
  imageBase64?: string
  interest?: {
    [key: string]: string
  }
}
