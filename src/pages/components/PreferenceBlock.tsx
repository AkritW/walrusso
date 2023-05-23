import Image from 'next/image'

const PreferenceBlock = (text:string) => {
    const map = new Map<string, string[]>([
        ["Asia", ["blue", "suitcase"]],
        ["Europe", ["blue", "suitcase"]],
        ["Puzzle", ["yellow", "game"]],
        ["Football", ["yellow", "game"]],
        ["Mountain", ["green", "mountain"]],
        ["Beach", ["green", "mountain"]],
        ["Pop", ["red", "music"]],
        ["Jazz", ["red", "music"]],
        ["Javascript", ["red", "coding"]]
    ])
    const components = map.get(text)
    const classOne = `px-[8px] h-[36px] bg-${components[0]}-25 rounded-[4px]`
    const classTwo = `text-small-regular text-${components[0]}-600 translate-y-[5px] inline-block`
    const classThree = `/icons/${components[1]}.png`

    return (
        <div className={classOne}>
            <Image className="translate-y-[2px] inline-block mr-[8px]" src={classThree} alt="" width={20} height={20}></Image>
            <p className={classTwo}>{text}</p>
        </div>
    )
}

export {PreferenceBlock}

// List of items
//
// Iterate through, create component. Variables [item]
//
// Maps items against -> Color, Icon
//
// [{items}:[color, icon]]