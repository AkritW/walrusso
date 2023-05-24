import { HeadBarSecondary } from "~/pages/components/HeadBar";
import Image from "next/image";
import { useState, useEffect } from "react";
import { type NextPage } from "next";
import MenuBar from "./components/MenuBar";

interface _LeaderboardAPIResponse {
  name: string;
  score: number;
}

type LeaderboardAPIResponse = Array<_LeaderboardAPIResponse>;

const Home: NextPage = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardAPIResponse | null>(
    null
  );
  const heightCalculation = ({
    x,
    y,
    z,
  }: {
    x: number;
    y: number;
    z: number;
  }) => {
    return [
      (150 * (y / x)).toFixed(0),
      (150 * (z / x)).toFixed(0),
      (150 * (y / x) - 5).toFixed(0),
      (150 * (z / x) - 5).toFixed(0),
    ];
  };

  const heights = leaderboard
    ? heightCalculation({
        x: leaderboard[0]?.score as unknown as number,
        y: leaderboard[1]?.score as unknown as number,
        z: leaderboard[2]?.score as unknown as number,
      })
    : null;

  const a = heights ? { height: Number(heights[0]) } : { height: 0 };
  const b = heights ? { height: Number(heights[1]) } : { height: 0 };
  const c = heights ? { height: Number(heights[2]) } : { height: 0 };
  const d = heights ? { height: Number(heights[3]) } : { height: 0 };

  useEffect(() => {
    void (async () => {
      const response = await fetch("/api/getLeaderboard");
      console.log(response);
      const data = (await response.json()) as LeaderboardAPIResponse;
      console.log(data);

      setLeaderboard(data);
    })();
  }, []);

  const dates = "1 May 2023 - 31 May 2023";
  return (
    <>
      <HeadBarSecondary heading={"Leaderboard"} />
      <div className="flex h-[772px] w-screen flex-col items-center bg-orange-25">
        <p className="text-xl-bold mb-[37px] mt-[24px] text-gray-700">
          {dates}
        </p>
        <div className="grid w-[214px] grid-cols-3 justify-items-center">
          <div className="relative flex h-[100%] flex-col place-items-center justify-end place-self-start">
            <Image
              src={`/icons/${leaderboard && leaderboard[1].name}.png`}
              alt=""
              width={56}
              height={56}
            />
            <div
              className="mt-[8px] w-[64px] rounded-t-[4px] bg-red-500"
              style={a}
            />
            <p className="display-sm-semibold absolute bottom-[3px] text-white">
              2
            </p>
            <p className="text-xl-bold absolute text-white" style={c}>
              {leaderboard && leaderboard[1].score}
            </p>
          </div>
          <div className="relative flex flex-col place-items-center justify-end">
            <Image
              src={`/icons/${leaderboard && leaderboard[0].name}.png`}
              alt=""
              width={56}
              height={56}
            />
            <div className="mt-[8px] h-[150px] w-[64px] rounded-t-[4px] bg-orange-500" />
            <p className="display-sm-semibold absolute bottom-[3px] text-white">
              1
            </p>
            <p className="text-xl-bold absolute bottom-[125px] text-white">
              {leaderboard && leaderboard[0].score}
            </p>
          </div>
          <div className="relative flex h-[100%] flex-col place-items-center justify-end place-self-end">
            <Image
              src={`/icons/${leaderboard && leaderboard[2].name}.png`}
              alt=""
              width={56}
              height={56}
            />
            <div
              className="mt-[8px] w-[64px] rounded-t-[4px] bg-yellow-500"
              style={b}
            />
            <p className="display-sm-semibold absolute bottom-[3px] text-white">
              3
            </p>
            <p className="text-xl-bold absolute text-white" style={d}>
              {leaderboard && leaderboard[2].score}
            </p>
          </div>
        </div>
        <div className="flex h-[392px] w-screen flex-col items-center rounded-t-[12px] bg-white pt-[32px]">
          <div className="flex flex-row place-items-center">
            <p className="display-xs-semibold mr-[16px] text-gray-500">04</p>
            <div className="flex h-[72px] w-[274px] flex-row place-items-center rounded-[12px] bg-gray-25">
              <Image
                src={`/icons/${leaderboard && leaderboard[3].name}.png`}
                width={56}
                height={56}
                alt=""
                className="ml-[12px] mr-[8px]"
              />
              <div className="mr-auto">
                <p className="text-lg-bold text-gray-300">
                  Team {leaderboard && leaderboard[3].name}
                </p>
                <p className="text-md-medium text-gray-300">
                  {leaderboard && leaderboard[3].score}
                </p>
              </div>
              <p className="text-xl-bold mr-[8px] text-gray-400">+1</p>
              <Image
                src="/icons/upvote.png"
                alt=""
                width={18}
                height={16}
                className="mr-[16px]"
              />
            </div>
          </div>
        </div>
      </div>
      <MenuBar location={3} />
    </>
  );
};

export default Home;
