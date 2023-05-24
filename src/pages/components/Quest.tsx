import Image from "next/image";
import React from "react";

type Handler = (name: string) => void;

interface Props {
  time: Date;
  text: string;
  point: string;
  callback: Handler;
}

const Quest: React.FC<Props> = (props) => {
  const computeTimeDifference = (expired: Date): string => {
    const timeDiffMs = expired.getTime() - Date.now();
    const timeDiffHours = Math.floor(timeDiffMs / (1000 * 60 * 60));
    const days = Math.floor(timeDiffHours / 24);
    const hours = timeDiffHours % 24;

    const daysStr = days > 0 ? `${days} day${days > 1 ? "s" : ""}` : "";
    const hoursStr = hours > 0 ? `${hours} hour${hours > 1 ? "s" : ""}` : "";

    return [daysStr, hoursStr].filter(Boolean).join(", ");
  };

  return (
    <div
      onClick={() => props.callback(props.text)}
      className="mb-[12px] flex w-[100%] flex-row items-center justify-start rounded-[8px] bg-white py-[10px] shadow-md"
    >
      <Image
        className="mx-[16px]"
        src="/icons/team_dark.png"
        height="0"
        width="0"
        sizes="100vw"
        style={{ width: "auto", height: "24px" }}
        alt=""
      />
      <div>
        <p className="text-xs-semibold mb-[2px] text-gray-900">
          {computeTimeDifference(props.time)}
        </p>
        <p className="text-lg-light max-w-[200px] text-gray-900">
          {props.text}
        </p>
      </div>
      <div className="ml-auto mr-[16px] flex h-[48px] w-[75px] items-center justify-center rounded-[4px] bg-yellow-25">
        <p className="display-xs-semibold text-yellow-400">
          {props.point + " pt"}
        </p>
      </div>
    </div>
  );
};

export default Quest;
