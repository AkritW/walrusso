import Image from 'next/image'

export default function MenuBar({location}:{location:number}) {
    return (
        <div className="flex flex-col w-screen absolute bottom-0 h-[84px] justify-evenly bg-white">
            <div className="flex flex-row w-screen justify-around">
                <Image alt="" src={(location == 1 ? '/icons/teamOn.png' : '/icons/team.png')} width="38" height="100"/>
                <Image alt="" src={(location == 2 ? '/icons/questOn.png' : '/icons/quest.png')} width="38" height="100"/>
                <Image alt="" src={(location == 3 ? '/icons/rankOn.png' : '/icons/rank.png')} width="38" height="100"/>
                <Image alt="" src={(location == 4 ? '/icons/chatOn.png' : '/icons/chat.png')} width="38" height="100"/>
            </div>
            <div className="flex flex-row w-screen justify-around -mt-[10px]">
                <p className={`menu-item ${location == 1 ? 'text-orange-400' : ''}`}>Team</p>
                <p className={`menu-item ${location == 2 ? 'text-orange-400' : ''}`}>Quests</p>
                <p className={`menu-item ${location == 3 ? 'text-orange-400' : ''}`}>Rank</p>
                <p className={`menu-item ${location == 4 ? 'text-orange-400' : ''}`}>Chats</p>
            </div>
        </div>
    )
}