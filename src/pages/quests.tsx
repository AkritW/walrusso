import { type NextPage } from "next";
import MenuBar from "~/pages/components/MenuBar";
import {HeadBarSecondary} from "~/pages/components/HeadBar";

const Home: NextPage = () => {
  return (
    <>
      <HeadBarSecondary heading={"Quests"}/>
      <MenuBar location={4}/>
    </>
  );
};

export default Home;
