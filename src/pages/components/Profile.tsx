import Image from "next/image";
import React from "react";
import MyComponent from "~/pages/components/PreferenceBlock";

const member = (string: string) => {
  const demosIndex = ["Olivia", "Phoenix"];
  const demos = [
    [
      "Olivia Rhye",
      "Human Resources",
      ["Hiking", "Yoga", "Pop"],
      "Hi! I'm Olivia and I like nature",
      "Member",
    ],
    [
      "Phoenix",
      "Technology",
      ["Hiking", "Yoga", "Pop"],
      "Hi! I'm Olivia and I like nature",
      "Member-1",
    ],
  ];
  const demo = demos[demosIndex.findIndex((e) => e == string)];
  const preferences = demo[2] as string[];
  const manyTags = preferences.map((e) => <MyComponent text={e} key={e} />);
  console.log(manyTags);
  return (
    <div className="absolute left-0 top-[72px] flex h-screen w-screen flex-col items-center justify-start backdrop-blur-sm">
      <div className="mt-[48px] flex h-[517px] w-[334px] flex-col items-center rounded-[12px] bg-gray-25 px-[24px]">
        <Image
          src={`/teamMembers/${demo[4] as string}.png`}
          alt={""}
          width={128}
          height={128}
          className="mt-[32px] rounded-[64px]"
        />
        <p className="display-sm-semibold mt-[12px] text-gray-800">
          {demo[0] as string}
        </p>
        <p className="text-sm-regular mt-[16px] self-start text-gray-800">
          Department
        </p>
        <p className="text-lg-bold self-start text-gray-800">
          {demo[1] as string}
        </p>
        <p className="text-sm-regular mt-[16px] self-start text-gray-800">
          Preferences
        </p>
        <div className="mb-[16px] flex w-[100%] flex-row justify-start">
          {manyTags}
        </div>
        <p className="text-sm-medium self-start text-gray-800">Bio</p>
        <p className="text-xs-regular self-start text-gray-800">{demo[3]}</p>
      </div>
    </div>
  );
};

export { member };
