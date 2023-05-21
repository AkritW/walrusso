import Image from 'next/image'

// eslint-disable-next-line react/display-name
export default PreferenceBlock = (category:string, text:string) => {
    const map = new Map<string, string[]>([
        ["travel", ["blue", "suitcase"]],
        ["game", ["yellow", "game"]],
        ["scenery", ["green", "mountain"]],
        ["music", ["red", "music"]],
        ["computer", ["red", "coding"]]
    ])
    map.get(category)

    return (
        <div className="px-[8px] h-[36px] bg-green-25 rounded-[4px]">
            <Image className="-translate-y-[4px] inline-block mr-[8px]" src="/icons/mountain.png" alt="" width={20} height={20}></Image>
            <p className="text-small-regular text-green-600 inline-block">Hiking</p>
        </div>
    )
}