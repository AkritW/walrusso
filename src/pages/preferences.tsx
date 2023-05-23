import { type NextPage } from "next"
import { HeadBar } from "~/pages/components/HeadBar"
import Image from "next/image"
import { useEffect } from "react"
import { PreferenceBlock } from "~/pages/components/PreferenceBlock"

interface InterestAPIResponse {
  email: string
  options: Array<string>
}

const Home: NextPage = () => {
  const createTags = (tags: string[]) => {
    let result = ""
    for (const tag of tags) {
      const temp = PreferenceBlock(tag)
      result = String(result) + String(temp)
    }
    return "tags"
  }
  const manyTags = [PreferenceBlock("Pop"), PreferenceBlock("Mountain")]

  useEffect(() => {
    void (async () => {
      const response = await fetch("/api/interest")
      console.log(response)
      const interest = (await response.json()) as InterestAPIResponse

      // todo: handle popup/redirect
    })()
  }, [])

  return (
    <>
      <HeadBar />
      <div className="relative h-[774px] w-screen">
        <div className="mx-[20px] mt-[60px] flex flex-col items-center justify-center">
          <div className="display-xs-bold mb-[32px] text-gray-900">
            Preferences
          </div>
          <div className="text-md-regular text-grey-900 mb-[32px]">
            Select topics that match your preferences
          </div>
          <div className="mx-[25px] flex w-[340px] flex-row justify-center gap-[8px]">
            <div className="flex flex-row gap-[8px]">{manyTags}</div>
          </div>
        </div>
        <button className="button-primary absolute bottom-[178px] left-[20px] !w-[350px]">
          Done
        </button>
      </div>
    </>
  )
}

export default Home
