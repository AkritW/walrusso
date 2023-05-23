import Image from "next/image";
import Link from "next/link";

const HeadBar = () => {
  return (
    <div className="display-xs-semibold flex h-[72px] w-screen items-center justify-center bg-red-500 text-white">
      WALRUSSO
    </div>
  );
};

const HeadBarSecondary = ({ heading }: { heading: string }) => {
  return (
    <>
      <div>
        <div className="grid h-[72px] w-screen grid-cols-2 content-center bg-red-500">
          <div className="col-span-1 flex flex-row">
            <Image
              className="ml-[16px] mr-[12px]"
              src="/icons/appIcon.png"
              width="32"
              height="32"
              alt=""
            />
            <div className="display-xs-semibold text-white">{heading}</div>
          </div>
          <Link href={"/account"} className="col-span-1 justify-self-end">
            <Image
              src={"/icons/user.png"}
              alt={""}
              width={"32"}
              height={"32"}
              className={"mr-[12px]"}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export { HeadBar, HeadBarSecondary };
