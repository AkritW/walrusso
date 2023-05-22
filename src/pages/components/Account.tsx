import Image from 'next/image'
import {PreferenceBlock} from "~/pages/components/PreferenceBlock";
import React from "react";

const Account = ({userID}:{userID:string}) => {
    const image_path = "/teamMembers/Member.png"
    const name = "name"
    const department = "department"
    return (
        <div className="flex flex-col items-center justify-start w-screen h-screen backdrop-blur-sm absolute top-[72px] left-0">
            <div className="w-[334px] h-[616px] mt-[48px] flex flex-col items-center rounded-[12px] bg-gray-25 px-[24px]">
                <Image src={image_path} alt={""} width={128} height={128} className="rounded-[64px] mt-[32px]"/>
                <p className="mt-[12px] display-sm-semibold text-gray-800">{name}</p>
                <p className="mt-[24px] self-start text-md-bold text-gray-800">Department</p>
                <p className="mt-[8px] self-start text-lg-medium text-gray-800">{department}</p>
                <p className="mt-[24px] mb-[8px] self-start text-md-bold text-gray-800">Preferences</p>
                <div className="flex flex-row justify-around mb-[24px]">
                    <PreferenceBlock category={"scenery"} text={"travel"}/>
                </div>
                <p className="self-start text-md-bold text-gray-800">Bio</p>
                <p className="self-start text-xs-medium text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacinia lectus id est gravida tempus. Sed nulla diam, volutpat ut libero vitae, tristique iaculis tortor. Nam lacinia consequat ipsum. Maecenas.</p>
            </div>
        </div>
    )
}

export {Account}