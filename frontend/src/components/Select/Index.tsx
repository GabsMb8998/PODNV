'use client'

import { ButtonHTMLAttributes, ReactNode, useState } from "react"
import IconDropDown from "../../../public/IconDropDown"

interface SelectProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    options? : string[] | number[]
    onChange?: (val: any) => void
    error?: string
    children: ReactNode
} 

function Select({options, error, onChange, children,  ...props}:SelectProps){
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState<string | number>('Selecione uma opção')
    
    const handleOpen = () => {setIsOpen(!isOpen)}
    const handleSelected = (val: string| number) => {
        onChange!(val)
        setSelected(val)
        setIsOpen(false)

    }

    const options2 = ['teste', 'teste2', 'teste2', 'teste2', 'teste2']


    return(
        <div className="w-full relative">
            
            <div className="text-[#525252] font-medium mb-1">
                {children}
            </div>

            <div 
            onClick={handleOpen}
            className="w-full flex items-center justify-between gap-8 px-4 border-1 border-[#D8D8D8] rounded py-2">
                <span className="text-[#A9A9A9]">
                    {selected}
                </span>
                <IconDropDown width="20" color="#ADADAD"/>
            </div>

            {isOpen && (
                <div className=" absolute w-full z-10 bg-white max-h-44 overflow-y-auto  shadow-lg border-1 border-[#E7E7E7] rounded-lg mt-1">
                    {options2.map((option)=>(
                        <div 
                        onClick={()=>handleSelected(option)}
                        className="my-2 mx-3 px-2 py-1 hover:bg-[#F5F5F5] rounded text-[#525252] font-medium">{option}</div>
                    ))}
                </div>
            )}
        </div>

    )
}

export default Select