import { type NextPage } from "next";
import MenuBar from "~/pages/components/MenuBar";
import {HeadBarSecondary} from "~/pages/components/HeadBar";
import {Profile} from "~/pages/components/Profile";

const Home: NextPage = () => {
  return (
    <>
      <HeadBarSecondary heading={"Testing"}/>
        <div className="w-screen h-screen bg-green-600">banana</div>
        <Profile string={"test"}/>
      <MenuBar location={4}/>
    </>
  );
};

export default Home;
