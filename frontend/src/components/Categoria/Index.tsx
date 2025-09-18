import { ReactNode } from "react"

interface CategoriaProps {
    children: ReactNode
    name: string
    description: string
    color: string
}

function Categoria ({ children, name, description, color } : CategoriaProps){
console.log(color, 'color')
    return(
        <div className="flex gap-4 font-normal">
            <div>
                <div className={`bg-[#FFDCBC] w-12 h-12 flex justify-center items-center rounded-lg`}>
                    {children}
                </div>
            </div>

            <div className="flex flex-col">
                <span className="text-[#131313]">{name}</span>
                <span className="text-[#727272]">{description}</span>
            </div>
        </div>
    )
}

export default Categoria