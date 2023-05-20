import Image from 'next/image'

export default function InitialScreen({string}:{string:string}) {
    return (
        <div className="flex flex-col items-center justify-center w-screen mt-[60px]">
            <Image src="/icons/appIcon.png" alt="" width="154" height="120"/>
            <div className="display-xs-bold my-[32px] text-gray-900">{string}</div>
        </div>
    )
}