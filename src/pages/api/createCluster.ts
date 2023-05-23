import { type NextApiRequest, type NextApiResponse } from "next"
import { env } from "../../env.mjs"
import { MongoClient } from "mongodb"
import { Cluster, Clusterer } from "k-medoids"
import Quest from "./utils/quest"

interface Body {
  cluster: number
}

interface UserInterest {
  _id: string
  email: string
  interest: {
    [key: string]: Array<[key: string]>
  }
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = new MongoClient(env.DB_URL)

  // to do: handle exception
  const body = JSON.parse(req.body as string) as Body

  await client.connect()
  const db = client.db("wulrusso")
  const collection = db.collection("user_interest")
  const dbRes = (await collection
    .find()
    .toArray()) as unknown as Array<UserInterest>
  const clusterData = dbRes.map((u) => {
    return {
      email: u.email,
      val: Object.entries(u.interest).map((v) => v[1].length),
    }
  })
  const clusterer = Clusterer.getInstance(clusterData, body.cluster, (a, b) => {
    if (a.val.length !== b.val.length) {
      throw new Error("the inputs must have the same dimension")
    }
    const sumOfSqrsOfDistances = Array.from(a.val)
      .map((_, i) => {
        const valB = b.val[i] ?? 0
        return Math.pow(Math.abs((a.val[i] as number) - valB), 2)
      })
      .reduce((j, k) => j + k, 0)
    return Math.sqrt(sumOfSqrsOfDistances)
  })

  const clusteredData = clusterer.getClusteredData()
  const collection2 = db.collection("cluster")
  await collection2.deleteMany({}) // delete all
  const ma = []
  for (const [i, c] of clusteredData.entries()) {
    for (const e of c) {
      ma.push({ email: e.email, cluster: i })
    }
  }
  const r = await collection2.insertMany(ma)

  res.status(200).json(r)
}

export default handler
