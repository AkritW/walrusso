import Image from 'next/image'
import {PreferenceBlock} from "~/pages/components/PreferenceBlock";
import React from "react";

const PreferenceLog = ({questID}:{questID:string}) => {
    const questName = "Running total of 100 Kilometers"
    const deadLine = "Deadline : 12 Days 10:40 hr [10/Jun/2023 12:00] "
    return (
        <div className="flex flex-col items-center justify-start w-screen h-screen backdrop-blur-sm absolute top-[72px] left-0">
            <div className="w-[334px] h-[446px] mt-[48px] flex flex-col items-center rounded-[12px] bg-white px-[24px]">
                <p className="self-start mt-[16px] mb-[8px] text-lg-bold text-gray-600">Team Quest</p>
                <p className="self-start text-xl-bold text-gray-900">{questName}</p>
                <p className="self-start mt-[16px] mb-[18px] text-xs-medium text-gray-900">{deadLine}</p>
                <div className="self-start flex-row">
                    <div className="px-[4px] py-[2px] rounded-[2px] bg-green-25 text-green-600 text-xs-semibold">Exercise</div>
                </div>
                <p className="mt-[16px] text-xs-semibold self-start text-gray-900">Quest details</p>
                <p className="mt-[4px] text-sm-regular self-start text-gray-900">To contribute to the quest you must submit a photo of the running app’s screen to prove your distance.</p>
                <p className="mt-[16px] text-xs-semibold self-start text-gray-900">Enter your distance</p>
                <input type="text" className="mt-[4px] w-[100%] rounded-[4px] border-[1px] border-gray-100"/>
                <div className="mt-[16px] flex flex-row justify-between w-[100%]">
                    <button className="h-[80px] w-[130px] bg-red-25 rounded-[8px] flex items-center justify-center">
                        <Image src="/icons/camera.png" width={34} height={32} alt="" />
                    </button>
                    <button className="h-[80px] w-[130px] bg-yellow-25 rounded-[8px] flex items-center justify-center">
                        <Image src="/icons/picture.png" width={34} height={32} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export {PreferenceLog}