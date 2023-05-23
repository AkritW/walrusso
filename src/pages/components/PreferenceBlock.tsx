import Image from 'next/image'

const map = new Map<string, string[]>([
        ["travel", ["blue", "suitcase"]],
        ["game", ["yellow", "game"]],
        ["scenery", ["green", "mountain"]],
        ["music", ["red", "music"]],
        ["computer", ["red", "coding"]]
    ])
const PreferenceBlock = ({text}:{text:string}) => {
    const components = map.get(text)
    const classOne = `px-[8px] h-[36px] bg-${components[0]}-25 rounded-[4px]`
    const classTwo = `text-small-regular text-${components[0]}-600 translate-y-[5px] inline-block`

    return (
        <div className={classOne}>
            <Image className="translate-y-[2px] inline-block mr-[8px]" src="/icons/mountain.png" alt="" width={20} height={20}></Image>
            <p className={classTwo}>{text}</p>
        </div>
    )
}

export {PreferenceBlock}