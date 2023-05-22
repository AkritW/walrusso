import { type NextPage } from "next";
import MenuBar from "~/pages/components/MenuBar";
import {HeadBarSecondary} from "~/pages/components/HeadBar";
import Image from 'next/image'

const Home: NextPage = () => {
  const heightCalculation = ({x, y, z}:{x:number, y:number, z:number}) => {
    return [
      (150*(y/x)).toFixed(0),
      (150*(z/x)).toFixed(0),
      ((150*(y/x))-25).toFixed(0),
      ((150*(z/x))-25).toFixed(0)
    ]
  }
  const heights = heightCalculation({x:152, y:141, z:70})
  const a = {height:Number(heights[0])}
  const b = {height:Number(heights[1])}
  const c = {bottom:Number(heights[2])}
  const d = {bottom:Number(heights[3])}
  console.log(heights[0])

  const dates = "1 May 2023 - 31 May 2023"
  return (
    <>
      <HeadBarSecondary heading={"Leaderboard"}/>
        <div className="w-screen h-[772px] bg-orange-25 flex items-center flex-col">
          <p className="mt-[24px] mb-[37px] text-xl-bold text-gray-700">{dates}</p>
          <div className="grid grid-cols-3 w-[214px] justify-items-center">
            <div className="flex flex-col place-items-center justify-end h-[100%] place-self-start relative">
              <Image src="/icons/cow.png" alt="" width={56} height={56}/>
              <div className="w-[64px] bg-red-500 mt-[8px] rounded-t-[4px]" style={a}/>
              <p className="absolute bottom-[3px] display-sm-semibold text-white">2</p>
              <p className="absolute text-xl-bold text-white" style={c}>141</p>
            </div>
            <div className="flex flex-col place-items-center justify-end relative">
              <Image src="/icons/pig.png" alt="" width={56} height={56}/>
              <div className="h-[150px] w-[64px] bg-orange-500 mt-[8px] rounded-t-[4px]"/>
              <p className="absolute bottom-[3px] display-sm-semibold text-white">1</p>
              <p className="absolute bottom-[125px] text-xl-bold text-white">152</p>
            </div>
            <div className="flex flex-col place-items-center justify-end h-[100%] place-self-end relative">
              <Image src="/icons/rabbit.png" alt="" width={56} height={56}/>
              <div className="w-[64px] bg-yellow-500 mt-[8px] rounded-t-[4px]" style={b}/>
              <p className="absolute bottom-[3px] display-sm-semibold text-white">3</p>
              <p className="absolute text-xl-bold text-white" style={d}>70</p>
            </div>
          </div>
          <div className="pt-[32px] h-[392px] w-screen bg-white rounded-t-[12px] flex items-center flex-col">
            <div className="flex flex-row place-items-center">
            <p className="display-xs-semibold text-gray-500 mr-[16px]">04</p>
            <div className="flex flex-row h-[72px] w-[274px] rounded-[12px] bg-gray-25 place-items-center">
              <Image src={"/icons/dog.png"} width={56} height={56} alt="" className="ml-[12px] mr-[8px]"/>
              <div className="mr-auto">
                <p className="text-lg-bold text-gray-300">Team Dog</p>
                <p className="text-md-medium text-gray-300">41 pts</p>
              </div>
              <p className="text-xl-bold text-gray-400 mr-[8px]">+1</p>
              <Image src="/icons/upvote.png" alt="" width={18} height={16} className="mr-[16px]"/>
            </div>
          </div>
          </div>
        </div>
        <MenuBar location={3}/>
    </>
  );
};

export default Home;
