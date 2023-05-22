import Image from 'next/image'

export default function MenuBar({location}:{location:number}) {
    return (
        <div className="flex flex-col w-screen absolute bottom-0 h-[84px] justify-evenly bg-white">
            <div className="flex flex-row w-screen justify-around">
                <Image alt="" src={(location == 1 ? '/icons/teamOn.png' : '/icons/team.png')} width="0" height="0" className="w-[32px] h-[auto] " sizes="100vw"/>
                <Image alt="" src={(location == 2 ? '/icons/questOn.png' : '/icons/quest.png')} width="0" height="0" className="w-[32px] h-[auto]" sizes="100vw"/>
                <Image alt="" src={(location == 3 ? '/icons/rankOn.png' : '/icons/rank.png')} width="0" height="0" className="w-[32px] h-[auto]" sizes="100vw"/>
                <Image alt="" src={(location == 4 ? '/icons/chatOn.png' : '/icons/chat.png')} width="0" height="0" className="w-[32px] h-[auto]" sizes="100vw"/>
            </div>
            <div className="flex flex-row w-screen justify-around -mt-[10px]">
                <p className={`menu-item text-gray-500 ${location == 1 ? 'text-orange-400' : ''}`}>Team</p>
                <p className={`menu-item text-gray-500 ${location == 2 ? 'text-orange-400' : ''}`}>Quests</p>
                <p className={`menu-item text-gray-500 ${location == 3 ? 'text-orange-400' : ''}`}>Rank</p>
                <p className={`menu-item text-gray-500 ${location == 4 ? 'text-orange-400' : ''}`}>Chats</p>
            </div>
        </div>
    )
}