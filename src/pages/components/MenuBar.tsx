import Image from "next/image";
import Link from "next/link";

export default function MenuBar({ location }: { location: number }) {
  return (
    <div className="fixed bottom-0 flex h-[84px] w-screen flex-col justify-evenly bg-white">
      <div className="flex w-screen flex-row justify-around">
        <Image
          alt=""
          src={location == 1 ? "/icons/teamOn.png" : "/icons/team.png"}
          width="0"
          height="0"
          className="h-[auto] w-[32px] "
          sizes="100vw"
        />
        <Image
          alt=""
          src={location == 2 ? "/icons/questOn.png" : "/icons/quest.png"}
          width="0"
          height="0"
          className="h-[auto] w-[32px]"
          sizes="100vw"
        />
        <Image
          alt=""
          src={location == 3 ? "/icons/rankOn.png" : "/icons/rank.png"}
          width="0"
          height="0"
          className="h-[auto] w-[32px]"
          sizes="100vw"
        />
        <Image
          alt=""
          src={location == 4 ? "/icons/chatOn.png" : "/icons/chat.png"}
          width="0"
          height="0"
          className="h-[auto] w-[32px]"
          sizes="100vw"
        />
      </div>
      <div className="-mt-[10px] flex w-screen flex-row justify-around">
        <p
          className={`menu-item w-[80px] text-center text-gray-500 ${
            location == 1 ? "text-orange-400" : ""
          }`}
        >
          Team
        </p>
        <p
          className={`menu-item w-[80px] text-center text-gray-500 ${
            location == 2 ? "text-orange-400" : ""
          }`}
        >
          Quests
        </p>
        <p
          className={`menu-item w-[80px] text-center text-gray-500 ${
            location == 3 ? "text-orange-400" : ""
          }`}
        >
          Rank
        </p>
        <p
          className={`menu-item w-[80px] text-center text-gray-500 ${
            location == 4 ? "text-orange-400" : ""
          }`}
        >
          Chats
        </p>
      </div>
      <div>
        <Link
          href="/team"
          className="absolute bottom-0 left-[15px] h-[80px] w-[70px]"
        />
        <Link
          href="/quests"
          className="absolute bottom-0 left-[110px] h-[80px] w-[70px]"
        />
        <Link
          href="/leaderboard"
          className="absolute bottom-0 left-[205px] h-[80px] w-[70px]"
        />
        <Link
          href="/chats"
          className="absolute bottom-0 left-[305px] h-[80px] w-[70px]"
        />
      </div>
    </div>
  );
}