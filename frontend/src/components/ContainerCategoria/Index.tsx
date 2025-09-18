import { ReactNode } from "react"

interface ContainerCategoriaProps {
    children: ReactNode
    color?: string
}
function ContainerCategoria({children, color}: ContainerCategoriaProps){
    return(
        <div className={`${color} border-1 border-[#D8D8D8] flex w-full justify-between py-4 px-5 rounded font-semibold items-center`}>
            {children}
        </div>
    )
}

export default ContainerCategoria