import { type NextApiRequest, type NextApiResponse } from "next"
import { env } from "../../env.mjs"
import { MongoClient } from "mongodb"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = new MongoClient(env.DB_URL)

  await client.connect()
  const db = client.db("wulrusso")
  const collection = db.collection("team")
  const dbRes = await collection.find().toArray()

  res.status(200).json(dbRes)
}

export default handler
