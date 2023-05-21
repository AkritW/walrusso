import { type NextPage } from "next";
import React from "react";
import Image from 'next/image'
import InitialScreen from "~/pages/components/InitialScreen";
import Link from 'next/link'
import {HeadBar} from "~/pages/components/HeadBar";

interface CreateStatus {
    acknowledged: boolean,
    insertedId: string 
}

const Home: NextPage = () => {
  // todo: where is the input value

  const handleSubmit = async () => {
    const res = await fetch("/api/createUser/", {
      method: "POST",
      body: JSON.stringify({
        email: "",
        password: "", // todo: where is input value for password
      })
    })
    const resJson = res.json() as CreateStatus
    const isCreated = resJson.acknowledged

    // todo: handle popup/redirect
  }

  return (
    <>
        <HeadBar />
        <InitialScreen string={'Create an account'}/>
        <div className="mx-[20px] flex flex-col">
            <label htmlFor="Email" className="text-sm-semibold text-gray-600 mb-[6px]">Email</label>
            <input type="email" id="email" placeholder="Enter your email" className="mb-[20px] h-[44px] px-4 w-full border-[1px] border-gray-100 rounded-[8px]"/>
            <label htmlFor="Password" className="text-sm-semibold text-gray-600 mb-[6px]">Password</label>
            <input type="password" id="password" placeholder="Enter your password" className="mb-[20px] h-[44px] px-4 w-full border-[1px] border-gray-100 rounded-[8px]"/>
            <label htmlFor="Password" className="text-sm-semibold text-gray-600 mb-[6px]">Re-enter password</label>
            <input type="password" id="password" placeholder="Enter your password" className="mb-[24px] h-[44px] px-4 w-full border-[1px] border-gray-100 rounded-[8px]"/>
            <button className="button-primary mb-[16px]">Sign up</button>
            <div className="button-secondary flex flex-row items-center justify-center mb-[32px]">
                <Image src="/icons/GoogleIcon.png" alt="" width="24" height="24" className="mr-[12px]"/>
                <div>Sign up with Google</div>
            </div>
            <div className="text-sm-regular text-gray-500 text-center">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <div>Already have an account? <span className="inline text-sm-semibold text-orange-600"><Link href="/login">Log in</Link></span></div>
            </div>
        </div>
    </>
  );
};

export default Home;
