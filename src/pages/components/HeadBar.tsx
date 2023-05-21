import Image from 'next/image'

const HeadBar = () => {
    return (
        <div className="flex items-center justify-center w-screen h-[72px] bg-red-500 display-xs-semibold text-white">WALRUSSO</div>
    )
}

const HeadBarSecondary = () => {
    return (
        <div className="grid grid-cols-2 content-center w-screen h-[72px] bg-red-500">
            <div className="col-span-1 flex flex-row">
                <Image className="ml-[16px] mr-[12px]" src="/icons/appIconWhite.png" width="41" height="32" alt=""/>
                <div className="display-xs-semibold text-white">Your Team</div>
            </div>
            <div className="col-span-1 justify-self-end">
                <Image src={"/icons/user.png"} alt={""} width={"32"} height={"32"} className={"mr-[12px]"}/>
            </div>
        </div>
    )
}

export {HeadBar, HeadBarSecondary}