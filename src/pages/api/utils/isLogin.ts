import { env } from "../../../env.mjs"
import { MongoClient } from "mongodb"

interface Info {
  email: string
  password: string
}

const isLogin = async (info: Info) => {
  const client = new MongoClient(env.DB_URL)

  await client.connect()
  const db = client.db("wulrusso")
  const collection = db.collection("user")
  const dbRes = await collection.find(info).toArray()

  return dbRes.length != 0 ? true : false
}

export default isLogin
