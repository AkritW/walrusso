import { type NextApiRequest, type NextApiResponse } from "next"
import isLogin from "./utils/isLogin"

interface Body {
  email: string
  password: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body as string) as Body

  // to do: use session and hash password
  ;(await isLogin(body))
    ? res.status(200).json({ auth: true })
    : res.status(200).json({ auth: false })
}

export default handler
