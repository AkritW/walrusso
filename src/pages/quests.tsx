import { type NextPage } from "next"
import MenuBar from "~/pages/components/MenuBar"
import { HeadBarSecondary } from "~/pages/components/HeadBar"
import { useEffect } from "react"
import Image from "next/image"

interface QuestAPIResponse {
  name: string
  type: "team" | "individual"
  point: number
}

const Home: NextPage = () => {
  useEffect(() => {
    void (async () => {
      const response = await fetch("/api/sayHello")
      console.log(response)
      const data = (await response.json()) as QuestAPIResponse

      // todo: handle showing data
    })()
  }, [])

  return (
    <>
      <HeadBarSecondary heading={"Quests"} />
      <div className="flex h-screen w-screen justify-center bg-orange-25">
        <div className="mt-[16px] flex h-[572px] w-[354px] flex-col">
          <p className="display-xs-semibold text-gray-700">Quests</p>
          <div className="mt-[16px] flex flex-col">
            <div className="flex h-[64px] w-[100%] flex-row items-center justify-start rounded-[8px] bg-white shadow-md">
              <Image
                className="mx-[16px]"
                src="/icons/team_dark.png"
                height="0"
                width="0"
                sizes="100vw"
                style={{ width: "auto", height: "24px" }}
                alt=""
              />
              <div>
                <p className="text-xs-semibold mb-[2px] text-gray-900">
                  12 Days 10:43 hr
                </p>
                <p className="text-lg-light text-gray-900">
                  Have dinner together
                </p>
              </div>
              <div className="ml-auto mr-[16px] flex h-[48px] w-[75px] items-center justify-center rounded-[4px] bg-yellow-25">
                <p className="display-xs-semibold text-yellow-400">100pt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MenuBar location={2} />
    </>
  )
}

export default Home
