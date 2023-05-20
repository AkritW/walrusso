import { type NextApiRequest, type NextApiResponse } from "next"

interface HelloApiResponse {
  message: string
}

const handler = (_: NextApiRequest, res: NextApiResponse) => {
  const data: HelloApiResponse = {
    message: "Hello, World!",
  }

  res.status(200).json(data)
}

export default handler
