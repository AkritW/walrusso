import { type NextPage } from "next";
import MenuBar from "~/pages/components/MenuBar";
import {HeadBarSecondary} from "~/pages/components/HeadBar";
import {Account} from "~/pages/components/Account";

const Home: NextPage = () => {
  return (
    <>
      <HeadBarSecondary heading={"Account"}/>
        <div className="w-screen h-screen bg-orange-25"></div>
        <div className="w-screen h-screen bg-green-600">banana</div>
        <Account userID={"test"}/>
      <MenuBar location={5}/>
    </>
  );
};

export default Home;
