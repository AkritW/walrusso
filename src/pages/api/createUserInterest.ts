import { type NextApiRequest, type NextApiResponse } from "next"
import { env } from "../../env.mjs"
import { MongoClient } from "mongodb"
import type Interest from "./utils/interest"

type Body = Interest

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = new MongoClient(env.DB_URL)

  // to do: handle exception
  const body = JSON.parse(req.body as string) as Body

  await client.connect()
  const db = client.db("wulrusso")
  const collection = db.collection("user_interest")
  const dbRes = await collection.insertOne(body)

  res.status(200).json(dbRes)
}

export default handler
