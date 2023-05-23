import { type NextPage } from "next";
import {HeadBar} from "~/pages/components/HeadBar";
import Image from 'next/image'
import {PreferenceBlock} from "~/pages/components/PreferenceBlock";

const Home: NextPage = () => {
    const createTags = (tags:string[]) => {
        let result = ""
        for (const tag of tags){
            const temp = PreferenceBlock(tag)
            result = String(result) + String(temp)
        }
        return "tags"
    }
    // const manyTags = createTags(["string", "string"])
    const manyTags = "banana"
    return (
      <>
        <HeadBar/>
        <div className="relative w-screen h-[774px]">
            <div className="mx-[20px] flex flex-col items-center justify-center mt-[60px]">
            <div className="display-xs-bold mb-[32px] text-gray-900">Preferences</div>
            <div className="text-md-regular mb-[32px] text-grey-900">Select topics that match your preferences</div>
            <div className="mx-[25px] w-[340px] flex flex-row justify-center gap-[8px]">
                <div>{manyTags}</div>
            </div>
            </div>
            <button className="button-primary !w-[350px] absolute left-[20px] bottom-[178px]">Done</button>
        </div>
      </>
    );
  };
  
  export default Home;