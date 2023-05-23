import Image from "next/image";
import React, { useState } from "react";

interface MyComponentProps {
  text: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ text }) => {
  const [ticks, updateTicks] = useState([]);
  const handleTick = () => {
    updateTicks(ticks.push((event.target as Element).id));
    console.log(ticks);
  };

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

export default MyComponent;
