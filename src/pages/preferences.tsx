import { type NextPage } from "next";
import {HeadBar} from "~/pages/components/HeadBar";
import Image from 'next/image'

const Home: NextPage = () => {
    return (
      <>
        <HeadBar/>
        <div className="mx-[20px] flex flex-col items-center justify-center mt-[60px]">
            <div className="display-xs-bold mb-[32px] text-gray-900">Preferences</div>
            <div className="display-md-medium mb-[32px] text-grey-900">Select topics that match your preferences</div>
            <div className="w-full h-[168px] bg-orange-300 text-center text-middle">
                tags will be here, will make components for it
            </div>
            <button className="button-primary mt-[202px]">Done</button>
        </div>
      </>
    );
  };
  
  export default Home;