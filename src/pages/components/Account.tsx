import Image from "next/image";
import MyComponent from "~/pages/components/PreferenceBlock";
import React from "react";

const demo = [
  "Michele Mazza",
  "Techlead",
  ["Mountain", "Yoga", "Pop"],
  "Hi! I'm Michele Mazza",
  "Member",
];

const preferences = demo[2] as string[];
const manyTags = preferences.map((e) => <MyComponent text={e} key={e} />);
console.log(manyTags);
const Account = () => {
  return (
    <div className="absolute left-0 top-[72px] flex h-screen w-screen flex-col items-center justify-start bg-orange-25">
      <div className="mt-[48px] flex h-[616px] w-[334px] flex-col items-center rounded-[12px] bg-white px-[24px] shadow-2xl">
        <Image
          src={`/teamMembers/${demo[4]}.png`}
          alt={""}
          width={128}
          height={128}
          className="mt-[32px] rounded-[64px]"
        />
        <p className="display-sm-semibold mt-[12px] text-gray-800">{demo[0]}</p>
        <p className="text-md-bold mt-[24px] self-start text-gray-800">
          Department
        </p>
        <p className="text-lg-medium mt-[8px] self-start text-gray-800">
          {demo[1]}
        </p>
        <p className="text-md-bold mb-[8px] mt-[24px] self-start text-gray-800">
          Preferences
        </p>
        <div className="mb-[24px] flex flex-row justify-start">{manyTags}</div>
        <p className="text-md-bold self-start text-gray-800">Bio</p>
        <p className="text-xs-regular self-start text-gray-800">{demo[3]}</p>
      </div>
    </div>
  );
};

export { Account };
