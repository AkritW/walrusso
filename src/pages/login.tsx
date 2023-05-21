import { type NextPage } from "next";
import React from "react";
import Image from "next/image"
import HeadBar from "./components/HeadBar"
import InitialScreen from "~/pages/components/InitialScreen";
import TextField from "./components/TextField";

const Home: NextPage = () => {
  return (
    <>
        <HeadBar/>
        <InitialScreen string={"Log in to your account"}/>
        <div className="mx-[20px] flex flex-col">
            <div className="flex flex-col items-center justify-center">
                <TextField string="Email" type="email" placeholder="Enter your email"/>
                <TextField string="Password" type="password" placeholder="Enter your password"/>
                <button className="button-primary mb-[16px] max-w-[350px]">Log in</button>
                <div className="button-secondary flex items-center justify-center mb-[32px] max-w-[350px]">
                    <Image src="/icons/GoogleIcon.png" alt="" width="24" height="24" className="mr-[12px]"/>
                    <div>Log in with Google</div>
              </div>
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
