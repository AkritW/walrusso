import { type NextPage } from "next";
import React, { type ChangeEvent } from "react";
import Image from "next/image";
import InitialScreen from "~/pages/components/InitialScreen";
import Link from "next/link";
import { useState } from "react";
import { HeadBar } from "~/pages/components/HeadBar";
import { useRouter } from "next/router";

interface CreateStatus {
  acknowledged: boolean;
  insertedId: string;
}

const Home: NextPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setpasswordValue] = useState("");
  const [passwordReValue, setpasswordReValue] = useState("");
  const [validMail, setvalidMail] = useState(false);
  const [validPass, setvalidPass] = useState(false);
  const router = useRouter();

  const handleEmailChange = (event: ChangeEvent) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const input = (event.target as HTMLTextAreaElement).value;
    if (emailPattern.test(input)) {
      setEmailValue(input);
      setvalidMail(true);
    } else {
      setvalidMail(false);
    }
  };

  const handlePasswordChange = (event: ChangeEvent) => {
    const pass = (event.target as HTMLTextAreaElement).value;
    setpasswordValue(pass);
    if (passwordValue == passwordReValue) {
      setvalidPass(true);
    } else {
      setvalidPass(false);
    }
  };

  const handlePasswordRepeat = (event: ChangeEvent) => {
    const pass = (event.target as HTMLTextAreaElement).value;
    setpasswordReValue(pass);
    if (passwordValue == passwordReValue) {
      setvalidPass(true);
    } else {
      setvalidPass(false);
    }
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/createUser/", {
      method: "POST",
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
      }),
    });
    const resJson = await res.json() as CreateStatus;
    const isCreated = resJson.acknowledged;
    console.log(isCreated)
    router.push("/team");
  };

  return (
    <>
      <HeadBar />
      <InitialScreen string={"Create an account"} />
      <div className="mx-[20px] flex flex-col">
        <label
          htmlFor="Email"
          className="text-sm-semibold mb-[6px] text-gray-600"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          onChange={handleEmailChange}
          className="h-[44px] w-full rounded-[8px] border-[1px] border-gray-100 px-4"
        />
        <p className="text-sm-bold text-orange-600" hidden={validMail}>
          Invalid email
        </p>
        <label
          htmlFor="Password"
          className="text-sm-semibold mb-[6px] mt-[20px] text-gray-600"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          onChange={handlePasswordChange}
          className="h-[44px] w-full rounded-[8px] border-[1px] border-gray-100 px-4"
        />
        <p className="text-sm-bold text-orange-600" hidden={!validPass}>
          Passwords do not match
        </p>
        <label
          htmlFor="Password"
          className="text-sm-semibold mb-[6px] mt-[20px] text-gray-600"
        >
          Re-enter password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Re-enter your password"
          onChange={handlePasswordRepeat}
          className="mb-[24px] h-[44px] w-full rounded-[8px] border-[1px] border-gray-100 px-4"
        />
        <button
          onClick={handleSubmit}
          className="button-primary mb-[16px]"
          disabled={!validMail && !validPass}
        >
          Sign up
        </button>
        <div className="button-secondary mb-[32px] flex flex-row items-center justify-center">
          <Image
            src="/icons/GoogleIcon.png"
            alt=""
            width="24"
            height="24"
            className="mr-[12px]"
          />
          <div>Sign up with Google</div>
        </div>
        <div className="text-sm-regular text-center text-gray-500">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <div>
            Already have an account?{" "}
            <span className="text-sm-semibold inline text-orange-600">
              <Link href="/login">Log in</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
