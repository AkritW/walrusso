import Image from "next/image";
import MyComponent from "~/pages/components/PreferenceBlock";
import React, { useState, useEffect } from "react";

interface AccountAPIResponse {
  name: string;
  occupation: string;
  department: string;
  preferences: Array<string>;
  bio: string;
}

interface Props {
  userId: string;
}

const Account: React.FC<Props> = (props) => {
  const [account, setAccount] = useState<AccountAPIResponse | null>(null);

  useEffect(() => {
    void (async () => {
      const response = await fetch("/api/getAccount", {
        method: "POST",
        body: JSON.stringify({
          id: props.userId,
        }),
      });
      const data = (await response.json()) as AccountAPIResponse;
      console.log(data);

      setAccount(data);
    })();
  }, [props.userId]);

  const manyTags =
    account && account.preferences.map((e) => <MyComponent text={e} key={e} />);
  return (
    <div className="absolute left-0 top-[72px] flex h-[772px] w-screen flex-col items-center justify-start bg-orange-25">
      <div className="mt-[48px] flex h-[616px] w-[334px] flex-col items-center rounded-[12px] bg-white px-[24px] shadow-2xl">
        <Image
          src={`/teamMembers/member.png`}
          alt={""}
          width={128}
          height={128}
          className="mt-[32px] rounded-[64px]"
        />
        <p className="display-sm-semibold mt-[12px] text-gray-800">
          {account && account.name}
        </p>
        <p className="text-md-bold mt-[24px] self-start text-gray-800">
          Department
        </p>
        <p className="text-lg-medium mt-[8px] self-start text-gray-800">
          {account && account.department}
        </p>
        <p className="text-md-bold mb-[8px] mt-[24px] self-start text-gray-800">
          Preferences
        </p>
        <div className="mb-[24px] flex w-[100%] flex-row justify-start gap-[8px]">
          {manyTags}
        </div>
        <p className="text-md-bold self-start text-gray-800">Bio</p>
        <p className="text-xs-regular self-start text-gray-800">
          {account && account.bio}
        </p>
      </div>
    </div>
  );
};

export { Account };
