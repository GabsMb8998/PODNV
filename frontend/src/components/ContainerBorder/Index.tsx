import { ReactNode } from "react"

interface ContainerBorderProps {
    label: string
    children?: ReactNode
    iconChildren?: ReactNode
} 

function ContainerBorder({ label, children, iconChildren } : ContainerBorderProps){
    return(
        <div className="w-full h-full border-1 border-[#D8D8D8] rounded p-5">
            <span className="text-[#292929] font-semibold flex gap-3 items-center">
                {iconChildren}
                {label}
            </span>
            {children}
        </div>
    )
}

export default ContainerBorder