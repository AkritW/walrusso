import { type NextPage } from "next";
import MenuBar from "~/pages/components/MenuBar";
import { HeadBarSecondary } from "~/pages/components/HeadBar";
import Image from "next/image";

const Home: NextPage = () => {
  const demo = [
    ["pig", 152],
    ["cow", 145],
    ["rabbit", 70],
    ["dog", 41],
  ];
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
      (150 * (y / x) - 25).toFixed(0),
      (150 * (z / x) - 25).toFixed(0),
    ];
  };
  const heights = heightCalculation({
    x: demo[0][1],
    y: demo[1][1],
    z: demo[2][1],
  });
  const a = { height: Number(heights[0]) };
  const b = { height: Number(heights[1]) };
  const c = { bottom: Number(heights[2]) };
  const d = { bottom: Number(heights[3]) };
  console.log(heights[0]);

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
              src={`/icons/${demo[1][0]}.png`}
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
              {demo[1][1]}
            </p>
          </div>
          <div className="relative flex flex-col place-items-center justify-end">
            <Image
              src={`/icons/${demo[0][0]}.png`}
              alt=""
              width={56}
              height={56}
            />
            <div className="mt-[8px] h-[150px] w-[64px] rounded-t-[4px] bg-orange-500" />
            <p className="display-sm-semibold absolute bottom-[3px] text-white">
              1
            </p>
            <p className="text-xl-bold absolute bottom-[125px] text-white">
              {demo[0][1]}
            </p>
          </div>
          <div className="relative flex h-[100%] flex-col place-items-center justify-end place-self-end">
            <Image
              src={`/icons/${demo[2][0]}.png`}
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
              {demo[2][1]}
            </p>
          </div>
        </div>
        <div className="flex h-[392px] w-screen flex-col items-center rounded-t-[12px] bg-white pt-[32px]">
          <div className="flex flex-row place-items-center">
            <p className="display-xs-semibold mr-[16px] text-gray-500">04</p>
            <div className="flex h-[72px] w-[274px] flex-row place-items-center rounded-[12px] bg-gray-25">
              <Image
                src={`/icons/${demo[3][0]}.png`}
                width={56}
                height={56}
                alt=""
                className="ml-[12px] mr-[8px]"
              />
              <div className="mr-auto">
                <p className="text-lg-bold text-gray-300">Team {demo[3][0]}</p>
                <p className="text-md-medium text-gray-300">{demo[3][1]} pts</p>
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
