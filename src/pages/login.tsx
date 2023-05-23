import { type NextPage } from "next"
import React, { type ChangeEvent } from "react"
import Image from "next/image"
import InitialScreen from "~/pages/components/InitialScreen"
import Link from "next/link"
import { useState } from "react"
import { HeadBar } from "~/pages/components/HeadBar"
import { useRouter } from 'next/router';

interface AuthStatus {
      auth: boolean
    }
const Home: NextPage = () => {
  const [emailValue, setEmailValue] = useState("")
  const [passwordValue, setpasswordValue] = useState("")
  const [validMail, setvalidMail] = useState(false)
  const router = useRouter();
  const handleEmailChange = (event: ChangeEvent) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const input = (((event.target as HTMLTextAreaElement).value))
    if (emailPattern.test(input)){
      setEmailValue(input)
      setvalidMail(true)
    } else {
      setvalidMail(false)
    }
  }
  const handlePasswordChange = (event: ChangeEvent) => {
    setpasswordValue((event.target as HTMLTextAreaElement).value)
  }

  const handleSubmit = async () => {
    console.log("a")
    const res = await fetch("/api/checkAuth/", {
      method: "POST",
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
      }),
    })
    const resJson = (await res.json()) as AuthStatus
    const isLogin: boolean = resJson.auth
    router.push('/team')
  }

  return (
    <>
      <HeadBar />
      <InitialScreen string={"Log in to your account"} />
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
          className=" h-[44px] w-full rounded-[8px] border-[1px] border-gray-100 px-4 placeholder-gray-300"
        />
        <p className="text-sm-bold text-orange-600" hidden={validMail}>Invalid email</p>
        <label
          htmlFor="Password"
          className="mt-[20px] text-sm-semibold mb-[6px] text-gray-600"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          onChange={handlePasswordChange}
          className="mb-[24px] h-[44px] w-full rounded-[8px] border-[1px] border-gray-100 px-4 placeholder-gray-300"
        />
        <button onClick={handleSubmit} className="button-primary mb-[16px]" disabled={!validMail}>
          Log in
        </button>
        <div className="button-secondary mb-[32px] flex flex-row items-center justify-center">
          <Image
            src="/icons/GoogleIcon.png"
            alt=""
            width="24"
            height="24"
            className="mr-[12px]"
          />
          <div>Log in with Google</div>
        </div>
        <div className="text-sm-regular text-center text-gray-500">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <div>
            Don't have an account?{" "}
            <span className="text-sm-semibold inline text-orange-600">
              <Link href="/signup">Sign up</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
