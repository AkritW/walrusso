import { type NextPage } from "next";
import MenuBar from "~/pages/components/MenuBar";

const Home: NextPage = () => {
  return (
    <>
      <MenuBar location={4}/>
    </>
  );
};

export default Home;
