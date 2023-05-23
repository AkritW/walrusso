import { type NextPage } from "next";
import React, { type ChangeEvent } from "react";
import InitialScreen from "~/pages/components/InitialScreen";
import { useState } from "react";
import { HeadBar } from "~/pages/components/HeadBar";
import { useRouter } from "next/router";

interface AuthStatus {
  auth: boolean;
}

const Home: NextPage = () => {
  const [nameValue, setNameValue] = useState("");
  const [CompanyValue, setCompanyValue] = useState("");
  const [Department, setDepartment] = useState("");
  const router = useRouter();
  const handleNameChange = (event: ChangeEvent) => {
    setNameValue((event.target as HTMLTextAreaElement).value);
  };
  const handleCompanyChange = (event: ChangeEvent) => {
    setCompanyValue((event.target as HTMLTextAreaElement).value);
  };
  const handleDepartmentChange = (event: ChangeEvent) => {
    setDepartment((event.target as HTMLTextAreaElement).value);
  };

  const handleSubmit = async () => {
    console.log("a");
    const res = await fetch("/api/checkAuth/", {
      method: "POST",
      body: JSON.stringify({
        username: nameValue,
        company: CompanyValue,
        department: Department,
      }),
    });
    const resJson = (await res.json()) as AuthStatus;
    const isLogin: boolean = resJson.auth;
    router.push("/team");
  };

  return (
    <>
      <HeadBar />
      <InitialScreen string={"Setting up an account"} />
      <div className="mx-[20px] flex flex-col">
        <label
          htmlFor="username"
          className="text-sm-semibold mb-[6px] text-gray-600"
        >
          Username
        </label>
        <input
          type="email"
          id="username"
          placeholder="What do you want to be called?"
          onChange={handleNameChange}
          className=" h-[44px] w-full rounded-[8px] border-[1px] border-gray-100 px-4 placeholder-gray-300"
        />
        <label
          htmlFor="company"
          className="text-sm-semibold mb-[6px] mt-[20px] text-gray-600"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          placeholder="Enter your company"
          onChange={handleCompanyChange}
          className="mb-[20px] h-[44px] w-full rounded-[8px] border-[1px] border-gray-100 px-4 placeholder-gray-300"
        />
        <label
          htmlFor="department"
          className="text-sm-semibold mb-[6px] text-gray-600"
        >
          Department
        </label>
        <select
          id="department"
          placeholder="Enter your department"
          onChange={handleDepartmentChange}
          className="mb-[24px] h-[44px] w-full appearance-none rounded-[8px] border-[1px] border-gray-100 px-4 placeholder-gray-300"
        >
          <option value="Human Resources">Human Resources</option>
          <option value="Operations">Operations</option>
          <option value="Marketing">Marketing</option>
          <option value="Finance">Finance</option>
          <option value="Executive">Executive</option>
        </select>
        <button onClick={handleSubmit} className="button-primary mb-[16px]">
          Log in
        </button>
      </div>
    </>
  );
};

export default Home;
