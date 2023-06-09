import { type NextPage } from "next"
import MenuBar from "~/pages/components/MenuBar"
import { HeadBarSecondary } from "~/pages/components/HeadBar"
import Image from "next/image"
import React, { useState, useEffect } from "react"
import { member } from "~/pages/components/Profile"

interface _TeamAPIResponse {
  name: string
  imagePath: string
}

type TeamAPIResponse = Array<_TeamAPIResponse>

// const demo = [
//   ["Olivia", "Member"],
//   ["Phoenix", "Member-0"],
//   ["Lana", "Member-1"],
//   ["Demi", "Member-2"],
// ]

const Home: NextPage = () => {
  const [content, setContent] = useState("")

  const MyComponent: React.FC<_TeamAPIResponse> = ({ name, imagePath }) => {
    return (
      <>
        <input type="checkbox" id={name} onClick={handleClick} hidden />
        <label htmlFor={name} className="col-span-1 flex flex-col items-center">
          <Image
            src={`/teamMembers/${imagePath}.png`}
            width={"64"}
            height={"64"}
            alt={""}
          />
          <div className="text-sm-regular mt-[8px]">{name}</div>
        </label>
      </>
    )
  }
  const handleClick = () => {
    if (content == "") {
      setContent(member((event.target as Element).id))
    } else {
      setContent("")
    }
  }

  const [team, setTeam] = useState<TeamAPIResponse | null>(null)

  useEffect(() => {
    void (async () => {
      const response = await fetch("/api/getTeam")
      const data = (await response.json()) as TeamAPIResponse

      console.log(data)
      setTeam(data)
    })()
  }, [])

  const profiles = team ? team.map((t: _TeamAPIResponse) => {
    {
      return (
        <MyComponent
          name={t?.name}
          imagePath={t?.imagePath}
          key={t?.imagePath}
        />
      )
    }
  }) : null

  return (
    <>
      <HeadBarSecondary heading={"Your Team"} />
      {content}
      <div className="flex h-screen w-screen justify-center bg-orange-25">
        <div className="mt-[23px] flex h-[578px] w-[352px] flex-col items-center rounded-[16px] bg-white shadow-lg">
          <div className={"display-sm-semibold mt-[8px] text-gray-900"}>
            Team Walrus
          </div>
          <div className={"text-sm-regular mt-[8px] text-gray-900"}>
            From 1 - 31 May 2023
          </div>
          <div className="mt-[16px] grid grid-cols-4 gap-x-[24px] gap-y-[32px]">
            {team && profiles}
          </div>
        </div>
      </div>
      <MenuBar location={1} />
    </>
  )
}

export default Home
