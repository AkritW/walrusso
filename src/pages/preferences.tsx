import { type NextPage } from "next";
import { HeadBar } from "~/pages/components/HeadBar";
import Image from "next/image";
import { useEffect } from "react";
import React, { useState } from "react";

interface MyComponentProps {
  text: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ text }) => {
  const [ticks, updateTicks] = useState([]);

  const map = new Map<string, string[]>([
    ["Asia", ["blue", "suitcase"]],
    ["Europe", ["blue", "suitcase"]],
    ["RPG", ["yellow", "console"]],
    ["Puzzle", ["yellow", "console"]],
    ["Mountain", ["green", "mountain"]],
    ["Beach", ["green", "mountain"]],
    ["Pop", ["red", "music"]],
    ["Jazz", ["red", "music"]],
    ["Python", ["red", "chip"]],
    ["Javascript", ["red", "chip"]],
    ["Run", ["yellow", "-"]],
    ["Football", ["yellow", "-"]],
    ["Yoga", ["yellow", "-"]],
    ["Vintage car", ["green", "car"]],
    ["Sport car", ["green", "car"]],
  ]);
  const result = map.get(text);
  if (result[1] == "-") {
    return (
      <input
        type={"checkbox"}
        onChange={handleTick}
        className={`h-[36px] bg-${result[0]}-25 shrink-0 rounded-[4px] px-[8px]`}
      >
        <p
          className={`text-small-regular text-${result[0]}-600 inline-block translate-y-[5px]`}
        >
          {text}
        </p>
      </input>
    );
  } else {
    return (
      <div className={`h-[36px] bg-${result[0]}-25 rounded-[4px] px-[8px]`}>
        <input id={text} type="checkbox" onChange={handleTick} hidden />
        <label htmlFor={text}>
          <Image
            className="mr-[8px] inline-block translate-y-[2px] checked:text-white"
            src={`/icons/${result[1]}.png`}
            alt=""
            width={20}
            height={20}
          ></Image>
          <p
            className={`text-small-regular text-${result[0]}-600 inline-block translate-y-[5px]`}
          >
            {text}
          </p>
        </label>
      </div>
    );
  }
};

let ticks = [];
const handleTick = () => {
  ticks.push((event.target as Element).id);
  console.log(ticks);
};

interface InterestAPIResponse {
  email: string;
  options: Array<string>;
}

const Home: NextPage = () => {
  const data = [
    "Asia",
    "Europe",
    "RPG",
    "Puzzle",
    "Mountain",
    "Beach",
    "Pop",
    "Jazz",
    "Python",
  ];

  //testing data
  let manyTags = [];
  data.forEach((i) => {
    const x = <MyComponent text={i} key={i} />;
    manyTags.push(x);
  });

  useEffect(() => {
    void (async () => {
      const response = await fetch("/api/interest");
      console.log(response);
      const interest = (await response.json()) as InterestAPIResponse;
      // todo: handle popup/redirect
    })();
  }, []);

  return (
    <>
      <HeadBar />
      <div className="relative h-[774px] w-screen">
        <div className="mx-[20px] mt-[60px] flex flex-col items-center justify-center">
          <div className="display-xs-bold mb-[32px] text-gray-900">
            Preferences
          </div>
          <div className="text-md-regular text-grey-900 mb-[32px]">
            Select topics that match your preferences
          </div>
          <div className="mx-[25px] flex w-[340px] flex-row justify-center gap-[8px]">
            <div className="flex flex-row flex-wrap justify-center gap-[8px]">
              {manyTags}
            </div>
          </div>
        </div>
        <button
          onClick={handleTick}
          className="button-primary absolute bottom-[178px] left-[20px] !w-[350px]"
        >
          Done
        </button>
      </div>
    </>
  );
};

export default Home;
