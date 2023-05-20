import { type NextPage } from "next";
import React from "react";
import Image from 'next/image'
import HeadBar from "./components/HeadBar"
import InitialScreen from "~/pages/components/InitialScreen";

const Home: NextPage = () => {
  return (
    <>
        <HeadBar />
        <InitialScreen string={'Log in to your account'}/>
        <div className="mx-[20px] flex flex-col">
            <label htmlFor="Email" className="text-sm-semibold text-gray-600 mb-[6px]">Email</label>
            <input type="email" id="email" placeholder="Enter your email" className="mb-[20px] h-[44px] px-4 w-full border-[1px] border-gray-100 rounded-[8px]"/>
             <label htmlFor="Password" className="text-sm-semibold text-gray-600 mb-[6px]">Password</label>
            <input type="password" id="password" placeholder="" className="mb-[24px] h-[44px] px-4 w-full border-[1px] border-gray-100 rounded-[8px]"/>
            <button className="button-primary mb-[16px]">Log in</button>
            <div className="button-secondary flex flex-row items-center justify-center mb-[32px]">
                <Image src="/icons/GoogleIcon.png" alt="" width="24" height="24" className="mr-[12px]"/>
                <div>Sign in with Google</div>
            </div>
            <div className="text-sm-regular text-gray-500 text-center">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <div>Don't have an account? <span className="inline text-sm-semibold text-orange-600"><a href="/signup">Sign up</a></span></div>

            </div>
        </div>
    </>
  );
};

export default Home;
