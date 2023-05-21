import { type NextPage } from "next";
import MenuBar from "~/pages/components/MenuBar";
import {HeadBarSecondary} from "~/pages/components/HeadBar";
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <HeadBarSecondary heading={"Your Team"}/>
        <div className="flex justify-center w-screen h-screen bg-orange-25">
            <div className="mt-[23px] w-[352px] h-[578px] bg-white flex flex-col items-center">
                <div className={"mt-[8px] display-sm-semibold text-gray-900"}>Team Walrus</div>
                <div className={"mt-[8px] text-sm-regular text-gray-900"}>From 1 - 31 May 2023</div>
                <div className="grid grid-cols-4 gap-x-[24px] gap-y-[32px] mt-[16px]">
                    <div className="col-span-1 flex flex-col items-center">
                        <Image src={"/teamMembers/Member.png"} width={"64"} height={"64"} alt={""}/>
                        <div className="text-sm-regular mt-[8px]">Olivia</div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center">
                        <Image src={"/teamMembers/Member-0.png"} width={"64"} height={"64"} alt={""}/>
                        <div className="text-sm-regular mt-[8px]">Phoenix</div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center">
                        <Image src={"/teamMembers/Member-1.png"} width={"64"} height={"64"} alt={""}/>
                        <div className="text-sm-regular mt-[8px]">lana</div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center">
                        <Image src={"/teamMembers/Member-2.png"} width={"64"} height={"64"} alt={""}/>
                        <div className="text-sm-regular mt-[8px]">Demi</div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center">
                        <Image src={"/teamMembers/Member-3.png"} width={"64"} height={"64"} alt={""}/>
                        <div className="text-sm-regular mt-[8px]">Zahir</div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center">
                        <Image src={"/teamMembers/Member-4.png"} width={"64"} height={"64"} alt={""}/>
                        <div className="text-sm-regular mt-[8px]">Eve</div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center">
                        <Image src={"/teamMembers/Member-5.png"} width={"64"} height={"64"} alt={""}/>
                        <div className="text-sm-regular mt-[8px]">Drew</div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center">
                        <Image src={"/teamMembers/Member-6.png"} width={"64"} height={"64"} alt={""}/>
                        <div className="text-sm-regular mt-[8px]">Natali</div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center">
                        <Image src={"/teamMembers/Member-7.png"} width={"64"} height={"64"} alt={""}/>
                        <div className="text-sm-regular mt-[8px]">Candice</div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center">
                        <Image src={"/teamMembers/Member-8.png"} width={"64"} height={"64"} alt={""}/>
                        <div className="text-sm-regular mt-[8px]">Orlando</div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center">
                        <Image src={"/teamMembers/Member-9.png"} width={"64"} height={"64"} alt={""}/>
                        <div className="text-sm-regular mt-[8px]">Koray</div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center">
                        <Image src={"/teamMembers/Member-10.png"} width={"64"} height={"64"} alt={""}/>
                        <div className="text-sm-regular mt-[8px]">Ava</div>
                    </div>
                    <div></div>
                    <div className="col-span-1 flex flex-col items-center">
                        <Image src={"/teamMembers/Member-11.png"} width={"64"} height={"64"} alt={""}/>
                        <div className="text-sm-regular mt-[8px]">Kate</div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center">
                        <Image src={"/teamMembers/Member-12.png"} width={"64"} height={"64"} alt={""}/>
                        <div className="text-sm-regular mt-[8px]">Andi</div>
                    </div>
                </div>
            </div>
        </div>
      <MenuBar location={4}/>
    </>
  );
};

export default Home;
