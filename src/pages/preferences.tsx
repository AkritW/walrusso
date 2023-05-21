import {type NextPage} from "next";
import {HeadBar} from "~/pages/components/HeadBar";

const Home: NextPage = () => {
  return (
    <>
      <HeadBar/>
      <div className="mt-[60px] mx-[20px] h-[256px] w-[350px] flex flex-col items-center">
          <div className="display-xs-bold text-gray-900">Preferences</div>
          <div className="text-md-medium text-gray-900 mt-[32px]">Select topics that match your preferences</div>
          <div className="mt-[32px] flex flex-row">
              <input type="checkbox" id="Asia" className="peer/asia hidden"/>
              <label htmlFor="Asia" className="button-travel">Asia</label>
          </div>
      </div>
    </>
  );
};

export default Home;
