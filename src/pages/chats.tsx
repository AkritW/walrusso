import { type NextPage } from "next";
import MenuBar from "~/pages/components/MenuBar";
import { HeadBarSecondary } from "~/pages/components/HeadBar";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import Link from "next/Link";

const Home: NextPage = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event: ChangeEvent) => {
    setInputValue((event.target as HTMLTextAreaElement).value);
    console.log(inputValue);
  };
  const latestText = "You : Let’s meet to have dinner...";
  return (
    <>
      <HeadBarSecondary heading={"Chats"} />
      <div className="relative">
        <input
          type="text"
          className="ml-[21px] mt-[21px] h-[40px] w-[347px] rounded-[12px] bg-gray-25"
        />
        <div className="text-md-medium absolute left-10 top-[30px] text-gray-400">
          Search
        </div>
        <button className="absolute right-8 top-[28px]">
          <Image src="/icons/search.png" alt="" width={24} height={24} />
        </button>
      </div>
      <Link
        href={"/chat"}
        className="relative mt-[24px] flex w-screen flex-row border-b-[1px] border-t-[1px] border-gray-100 px-[16px] py-[8px]"
      >
        <Image src="/icons/pig.png" alt="" width={56} height={56} />
        <div className="ml-[16px]">
          <p className="text-lg-bold text-gray-900">Team Pig</p>
          <p className="text-md-medium mr-auto text-gray-900">{latestText}</p>
        </div>
        <p className="text-sm-medium absolute right-2 top-2 text-gray-900">
          13 min.
        </p>
      </Link>
      <MenuBar location={4} />
    </>
  );
};

export default Home;
