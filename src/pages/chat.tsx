import { type NextPage } from "next";
import MenuBar from "~/pages/components/MenuBar";
import {HeadBarSecondary} from "~/pages/components/HeadBar";
import Image from 'next/image'
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <HeadBarSecondary heading={"Chats"}/>
        <div className="w-screen h-[772px] bg-orange-100 relative">
            <div className="bg-white h-[72px] w-screen relative flex items-center justify-center">
                <p className="display-sm-regular text-gray-700">Team Pig</p>
                <Link href="">
                    <Image src="/icons/arrow.png" alt="" width={36} height={36} className="absolute top-[18px] left-0"/>
                </Link>
            </div>
            <div className="flex flex-col mx-[16px] mt-[24px]">
                <div className="flex flex-row">
                    <Image src="/teamMembers/Member.png" width={32} height={32} alt="" className="h-[32px] self-end"/>
                    <div className="flex-flex-row ml-[13px]">
                        <p className="text-xs-semibold text-gray-700 pl-[12px]">Candice</p>
                        <p className="px-[16px] py-[6px] bg-white text-sm-regular text-gray-700 rounded-[39px]">When do we want to have dinner?</p>
                        <p className="px-[16px] py-[6px] bg-white text-sm-regular text-gray-700 rounded-[39px] w-fit mt-[2px]">16:00 Tuesday?</p>
                    </div>
                </div>
                <p className="px-[16px] py-[6px] text-sm-regular text-white bg-red-400 rounded-[39px] w-fit mt-[2px] self-end">16:00 Tuesday?</p>
            </div>
            <div className="absolute bottom-[100px] w-[358px] ml-[16px] rounded-[35px] bg-white h-[44px] text-center flex items-center">
                <p className="text-lg-regular text-gray-500 ml-[16px]">Aa</p>
                <button onClick={""} className="absolute right-[16px]">
                    <Image src="/icons/submit.png" alt="" height={24} width={24}/>
                </button>
            </div>
        </div>
      <MenuBar location={4}/>
    </>
  );
};

export default Home;
