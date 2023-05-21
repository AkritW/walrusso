import { type NextPage } from "next";
import MenuBar from "~/pages/components/MenuBar";
import {HeadBarSecondary} from "~/pages/components/HeadBar";

const Home: NextPage = () => {
  return (
    <>
      <HeadBarSecondary/>
      <MenuBar location={4}/>
    </>
  );
};

export default Home;
