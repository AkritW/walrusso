import { type NextPage } from "next";
import MenuBar from "~/pages/components/MenuBar";
import { HeadBarSecondary } from "~/pages/components/HeadBar";
import { Account } from "~/pages/components/Account";

const Home: NextPage = () => {
  return (
    <>
      <HeadBarSecondary heading={"Account"}/>
        <Account userId={"4647cd80950a4e57b9a1bf258f7879a49d9f5a84a30163283358367450c0373a"}/>
      <MenuBar location={5}/>
    </>
  );
};

export default Home;
