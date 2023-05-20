import Image from 'next/image'

export default function MenuBar({location}:{location:number}) {
    let source1 = "/icons/team.png"
    let source2 = "/icons/quest.png"
    let source3 = "/icons/rank.png"
    let source4 = "/icons/chat.png"
    if (location == 1){
        source1 = "/icons/teamOn.png"
    }else if (location == 2){
        source2 = "/icons/questOn.png"
    }else if (location == 3){
        source3 = "/icons/rankOn.png"
    }else{
        source4 = "/icons/chatOn.png"
    }

    return (
        <div className="flex flex-row w-screen absolute bottom-0 h-[84px] justify-evenly bg-white">
            <div className="flex flex-col items-center justify-center">
                <div className="w-[32px] h-[32px]">
                    <Image alt="" src={source1} width="27" height="23"></Image>
                </div>
                <div className="text-sm-regular mt-[5px]">Teams</div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="w-[32px] h-[32px]">
                    <Image alt="" src={source2} width="27" height="23"></Image>
                </div>
                <div className="text-sm-regular mt-[5px]">Quests</div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="w-[32px] h-[32px]">
                    <Image alt="" src={source3} width="27" height="23"></Image>
                </div>
                <div className="text-sm-regular mt-[5px]">Rank</div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="w-[32px] h-[32px]">
                    <Image alt="" src={source4} width="27" height="23"></Image>
                </div>
                <div className="text-sm-regular mt-[5px]">Chats</div>
            </div>
        </div>
    )
}