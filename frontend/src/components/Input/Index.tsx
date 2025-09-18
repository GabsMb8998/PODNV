import { HtmlHTMLAttributes, InputHTMLAttributes, ReactNode } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    children: ReactNode
    width?: string
} 

function Input({children, width, ...props} : InputProps){
    return(
        <div className={` flex ${width ? 'items-center gap-6': 'flex-col' } `}>
            <div className="text-[#525252] font-medium mb-1">
                {children}
            </div>
            <input type="text" {...props} className={`${width? `w-[${width}px] py-1`: 'w-full py-2 '} placeholder:text-[#A9A9A9] placeholder:text-sm border-1 px-4 rounded border-[#D8D8D8] focus:outline-none`}/>
        </div>
    )
}

export default Input