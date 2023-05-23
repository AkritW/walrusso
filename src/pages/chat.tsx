import { type NextPage } from "next"
import MenuBar from "~/pages/components/MenuBar"
import { HeadBarSecondary } from "~/pages/components/HeadBar"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import Text from "./components/Text"

interface _ChatAPIResponse {
  from: string
  time: string
  text: string
}

type ChatAPIResponse = Array<_ChatAPIResponse>

const Home: NextPage = () => {
  const [chat, setChat] = useState<ChatAPIResponse | null>(null)

  useEffect(() => {
    void (async () => {
      const response = await fetch("/api/getChat")
      console.log(response)
      const data = (await response.json()) as ChatAPIResponse
      console.log(data)

      setChat(data)
    })()
  }, [])

  // todo: turn into components

  return (
    <>
      <HeadBarSecondary heading={"Chats"} />
      <div className="relative h-[772px] w-screen bg-orange-100">
        <div className="relative flex h-[72px] w-screen items-center justify-center bg-white">
          <p className="display-sm-regular text-gray-700">Team Pig</p>
          <Link href="">
            <Image
              src="/icons/arrow.png"
              alt=""
              width={36}
              height={36}
              className="absolute left-0 top-[18px]"
            />
          </Link>
        </div>
        <div className="mx-[16px] mt-[24px] flex flex-col">
          <div className="flex flex-row">
            <Image
              src="/teamMembers/Member.png"
              width={32}
              height={32}
              alt=""
              className="h-[32px] self-end"
            />
            <div className="flex-flex-row ml-[13px]">
              <p className="text-xs-semibold pl-[12px] text-gray-700">
                Candice
              </p>
              <p className="text-sm-regular rounded-[39px] bg-white px-[16px] py-[6px] text-gray-700">
                When do we want to have dinner?
              </p>
              <p className="text-sm-regular mt-[2px] w-fit rounded-[39px] bg-white px-[16px] py-[6px] text-gray-700">
                16:00 Tuesday?
              </p>
            </div>
          </div>
          <p className="text-sm-regular mt-[2px] w-fit self-end rounded-[39px] bg-red-400 px-[16px] py-[6px] text-white">
            16:00 Tuesday?
          </p>
        </div>
        <div className="absolute bottom-[100px] ml-[16px] flex h-[44px] w-[358px] items-center rounded-[35px] bg-white text-center">
          <p className="text-lg-regular ml-[16px] text-gray-500">Aa</p>
          <button className="absolute right-[16px]">
            <Image src="/icons/submit.png" alt="" height={24} width={24} />
          </button>
        </div>
      </div>
      <MenuBar location={4} />
    </>
  )
}

export default Home
