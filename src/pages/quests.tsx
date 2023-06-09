import { HeadBarSecondary } from "~/pages/components/HeadBar";
import { useEffect, useState } from "react";
import Quest from "./components/Quest";
import MenuBar from "./components/MenuBar";
import { type NextPage } from "next";
import { QuestLog } from "~/pages/components/QuestLog";

interface _QuestAPIResponse {
  name: string;
  type: "team" | "individual";
  point: number;
}

type QuestAPIResponse = Array<_QuestAPIResponse>;

const Home: NextPage = () => {
  const [quests, setQuests] = useState<QuestAPIResponse | null>(null);
  const [content, setContent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    void (async () => {
      const response = await fetch("/api/getQuest");
      const data = (await response.json()) as QuestAPIResponse;
      console.log(data);

      setQuests(data);
    })();
  }, []);

  const showQuest = (name: string) => {
    setContent(<QuestLog name={name} close={hideQuest} />);
  };

  const hideQuest = () => {
    setContent(null);
  };

  return (
    <>
      <div className="fixed">
        <HeadBarSecondary heading={"Quests"} />
      </div>
      {content}
      <div className="h-[72px]" />
      <div className="flex h-[688px] w-screen justify-center bg-orange-25">
        <div className="mt-[16px] flex h-[572px] w-[354px] flex-col">
          <p className="display-xs-semibold text-gray-700">Quests</p>
          <div className="mt-[16px] flex flex-col">
            {quests &&
              quests.map((quest) => (
                <Quest
                  key={quest.name + quest.point.toString()}
                  time={new Date()}
                  text={quest.name}
                  point={quest.point.toString()}
                  callback={showQuest}
                />
              ))}
            <div className="h-[80px]" />
          </div>
        </div>
      </div>
      <MenuBar location={2} />
    </>
  );
};

export default Home;
