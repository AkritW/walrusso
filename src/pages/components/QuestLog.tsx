import Image from "next/image";
import { PreferenceBlock } from "~/pages/components/PreferenceBlock";
import React from "react";

const QuestLog = ({ questID }: { questID: string }) => {
  const questName = "Running total of 100 Kilometers";
  const deadLine = "Deadline : 12 Days 10:40 hr [10/Jun/2023 12:00] ";
  return (
    <div className="absolute left-0 top-[72px] flex h-screen w-screen flex-col items-center justify-start backdrop-blur-sm">
      <div className="mt-[48px] flex h-[446px] w-[334px] flex-col items-center rounded-[12px] bg-white px-[24px]">
        <p className="text-lg-bold mb-[8px] mt-[16px] self-start text-gray-600">
          Team Quest
        </p>
        <p className="text-xl-bold self-start text-gray-900">{questName}</p>
        <p className="text-xs-medium mb-[18px] mt-[16px] self-start text-gray-900">
          {deadLine}
        </p>
        <div className="flex-row self-start">
          <div className="text-xs-semibold rounded-[2px] bg-green-25 px-[4px] py-[2px] text-green-600">
            Exercise
          </div>
        </div>
        <p className="text-xs-semibold mt-[16px] self-start text-gray-900">
          Quest details
        </p>
        <p className="text-sm-light mt-[4px] self-start text-gray-900">
          To contribute to the quest you must submit a photo of the running
          app’s screen to prove your distance.
        </p>
        <p className="text-xs-semibold mt-[16px] self-start text-gray-900">
          Enter your distance
        </p>
        <input
          type="text"
          className="mt-[4px] h-[32px] w-[100%] rounded-[4px] border-[1px] border-gray-100"
        />
        <div className="mt-[16px] flex w-[100%] flex-row justify-between">
          <button className="flex h-[80px] w-[130px] items-center justify-center rounded-[8px] bg-red-25">
            <Image src="/icons/camera.png" width={34} height={32} alt="" />
          </button>
          <button className="flex h-[80px] w-[130px] items-center justify-center rounded-[8px] bg-yellow-25">
            <Image src="/icons/picture.png" width={34} height={32} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export { QuestLog };
