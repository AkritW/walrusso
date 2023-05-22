import { type NextPage } from "next"
import React, { type ChangeEvent } from "react"
import Image from "next/image"
import InitialScreen from "~/pages/components/InitialScreen"
import Link from "next/link"
import { useState } from "react"
import { HeadBar } from "~/pages/components/HeadBar"


interface AuthStatus {
      auth: boolean
    }
const Home: NextPage = () => {
  // const[inputValue, setInputValue] = useState('')
  // const handleInputChange = (event:ChangeEvent) => {
  //     setInputValue((event.target as HTMLTextAreaElement).value )
  //     console.log(inputValue)
  // }
  //
  // const handleClick = () => {
  //     console.log(inputValue)

  const [inputValue, setInputValue] = useState("")
  const handleInputChange = (event: ChangeEvent) => {
    setInputValue((event.target as HTMLTextAreaElement).value)
    console.log(inputValue)
  }

  const handleSubmit = async () => {
    const res = await fetch("/api/checkAuth/", {
      method: "POST",
      body: JSON.stringify({
        email: inputValue,
        password: inputValue, // todo: where is input value for password
      }),
    })

    const resJson = (await res.json()) as AuthStatus
    const isLogin: boolean = resJson.auth

    // todo: handle popup/redirect
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
          onChange={handleInputChange}
          className="mb-[20px] h-[44px] w-full rounded-[8px] border-[1px] border-gray-100 px-4 placeholder-gray-300"
        />
        <label
          htmlFor="Password"
          className="text-sm-semibold mb-[6px] text-gray-600"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="mb-[24px] h-[44px] w-full rounded-[8px] border-[1px] border-gray-100 px-4 placeholder-gray-300"
        />
        <button onClick={handleSubmit} className="button-primary mb-[16px]">
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
