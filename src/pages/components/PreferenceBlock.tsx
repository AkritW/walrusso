import Image from "next/image";
import React, { useState } from "react";

interface MyComponentProps {
  text: string;
}

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
    ["Hiking", ["green", "mountain"]],
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
  const result = map.get(text) as string[];
  if (result[1] == "-") {
    return (
      <div
        className={`h-[36px] bg-${
          result[0] as string
        }-25 shrink-0 rounded-[4px] px-[8px]`}
      >
        <p
          className={`text-small-regular text-${
            result[0] as string
          }-600 inline-block translate-y-[5px]`}
        >
          {text}
        </p>
      </div>
    );
  } else {
    return (
      <div
        className={`h-[36px] bg-${
          result[0] as string
        }-25 rounded-[4px] px-[8px]`}
      >
        <label htmlFor={text}>
          <Image
            className="mr-[8px] inline-block translate-y-[2px] checked:text-white"
            src={`/icons/${result[1] as string}.png`}
            alt=""
            width={20}
            height={20}
          ></Image>
          <p
            className={`text-small-regular text-${
              result[0] as string
            }-600 inline-block translate-y-[5px]`}
          >
            {text}
          </p>
        </label>
      </div>
    );
  }
};

export default MyComponent;
