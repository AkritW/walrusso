import { type NextPage } from "next";


const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
          <div className="display-md-semibold">This is a display text</div>
          <div className="rounded-xl bg-green-500 text-lg-bold px-6 py-2 mt-2">This is a text</div>
      </div>
    </>
  );
};

export default Home;
