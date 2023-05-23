import { type NextPage } from "next";
import MenuBar from "~/pages/components/MenuBar";
import {HeadBarSecondary} from "~/pages/components/HeadBar";
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <HeadBarSecondary heading={"Quests"}/>
      <div className="flex justify-center w-screen h-[688px] bg-orange-25">
      <div className="mt-[16px] w-[354px] h-[572px] flex flex-col">
          <p className="display-xs-semibold text-gray-700">Quests</p>
          <div className="mt-[16px] flex flex-col">
              <div className="w-[100%] bg-white flex flex-row items-center h-[64px] rounded-[8px] shadow-md justify-start">
                  <Image className="mx-[16px]" src="/icons/team_dark.png" height="0" width="0" sizes="100vw" style={{ width: 'auto', height: '24px' } } alt=""/>
                  <div>
                      <p className="text-xs-semibold mb-[2px] text-gray-900">12 Days 10:43 hr</p>
                      <p className="text-lg-light text-gray-900">Have dinner together</p>
                  </div>
                  <div className="w-[75px] h-[48px] bg-yellow-25 rounded-[4px] ml-auto mr-[16px] flex items-center justify-center">
                      <p className="display-xs-semibold text-yellow-400">100pt</p>
                  </div>
              </div>
          </div>
      </div>
      </div>
      <MenuBar location={2}/>
    </>
  );
};

export default Home;
