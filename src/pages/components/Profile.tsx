import Image from 'next/image'
import PreferenceBlock from "~/pages/components/PreferenceBlock";
import React from "react";

const Profile = ({string}:{string:string}) => {
    const image_path = "/teamMembers/Member.png"
    return (
        <div className="flex flex-col items-center justify-start w-screen h-screen backdrop-blur-sm absolute top-[72px] left-0">
            <div className="w-[334px] h-[517px] mt-[48px] flex flex-col items-center rounded-[12px] bg-gray-25 px-[24px]">
            <div className="w-[334px] h-[517px] mt-[48px] flex flex-col items-center rounded-[12px] bg-gray-25 px-[24px]">
                <Image src={image_path} alt={""} width={128} height={128} className="rounded-[64px] mt-[32px]"/>
                <p className="mt-[12px] display-sm-semibold text-gray-800">Olivia Rhye</p>
                <p className="mt-[16px] self-start text-sm-regular text-gray-800">Department</p>
                <p className="self-start text-lg-bold text-gray-800">Human Resources</p>
                <p className="mt-[16px] self-start text-sm-regular text-gray-800">Preferences</p>
                <div className="flex flex-row justify-around">
                    <PreferenceBlock category = {"ma"} string = {"ma"} />
                </div>
            </div>
        </div>
        </div>
    )
}

export {Profile}