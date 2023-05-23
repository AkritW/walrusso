import Image from 'next/image'
import {Profile} from "~/pages/components/Profile";
import {useState} from "react";
import {Account} from "~/pages/components/Account";

const HeadBar = () => {
    return (
        <div className="flex items-center justify-center w-screen h-[72px] bg-red-500 display-xs-semibold text-white">WALRUSSO</div>
    )
}

const HeadBarSecondary = ({heading}:{heading:string}) => {
    const [isOpen, setIsOpen] = useState(false)
        const togglePopup = () => {
        if (isOpen == true) {
            setIsOpen(false)
        }else {
            setIsOpen(true)
        }
      }
    return(
    <>
        <div>
            <div className="grid grid-cols-2 content-center w-screen h-[72px] bg-red-500">
                <div className="col-span-1 flex flex-row">
                    <Image className="ml-[16px] mr-[12px]" src="/icons/appIcon.png" width="32" height="32" alt=""/>
                    <div className="display-xs-semibold text-white">{heading}</div>
                </div>
                <button onClick={togglePopup} className="col-span-1 justify-self-end">
                    <Image src={"/icons/user.png"} alt={""} width={"32"} height={"32"} className={"mr-[12px]"}/>
                </button>
            </div>
            {isOpen &&(Account("test"))}
        </div>
    </>
    )
}

export {HeadBar, HeadBarSecondary}