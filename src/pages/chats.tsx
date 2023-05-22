import { type NextPage } from "next";
import MenuBar from "~/pages/components/MenuBar";
import {HeadBarSecondary} from "~/pages/components/HeadBar";
import {ChangeEvent, useState} from "react";
import Image from "next/image"


const Home: NextPage = () => {
  const [inputValue, setInputValue] = useState("")
  const handleInputChange = (event: ChangeEvent) => {
    setInputValue((event.target as HTMLTextAreaElement).value)
    console.log(inputValue)
  }
  return (
    <>
      <HeadBarSecondary heading={"Chats"}/>
        <div className="relative">
          <input type="text" className="w-[347px] h-[40px] mt-[21px] ml-[21px] bg-gray-25 rounded-[12px]"/>
          <div className="absolute top-[30px] left-10 text-md-medium text-gray-400">Search</div>
          <button className="absolute top-[28px] right-8">
              <Image src="/icons/search.png" alt="" width={24} height={24}/>
          </button>
        </div>
        <div className="relative mt-[24px] border-gray-100 w-screen px-[16px] py-[8px] border-t-[1px] border-b-[1px] flex flex-row">
          <Image src="/icons/pig.png" alt="" width={56} height={56}/>
          <div className="ml-[16px]">
            <p className="text-lg-bold text-gray-900">Team Pig</p>
            <p className="text-md-medium text-gray-900 mr-auto">You : Let’s meet to have dinner...</p>
          </div>
          <p className="text-sm-medium text-gray-900 absolute top-2 right-2">13 min.</p>
        </div>
      <MenuBar location={4}/>
    </>
  );
};

export default Home;
