export default function TextField({string, type, placeholder}:{string:string, type:string, placeholder:string}) {
    return (
        <div className="flex flex-col mb-[20px] w-full max-w-[350px]">
            <label htmlFor={string} className="text-left text-sm-semibold text-gray-600 mb-[6px]">{string}</label>
            <input type={type} id={string.toLowerCase()} placeholder={placeholder} className="h-[44px] px-4 w-full border-[1px] border-gray-100 rounded-[8px]"/>
        </div>
    )
}