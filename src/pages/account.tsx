import { type NextPage } from "next";
import MenuBar from "~/pages/components/MenuBar";
import { HeadBarSecondary } from "~/pages/components/HeadBar";
import { Account } from "~/pages/components/Account";

const Home: NextPage = () => {
  return (
    <>
      <HeadBarSecondary heading={"Account"} />
      <Account />
      <MenuBar location={5} />
    </>
  );
};

export default Home;
