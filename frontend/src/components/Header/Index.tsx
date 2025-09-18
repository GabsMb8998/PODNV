import { ReactNode } from "react"

interface HeaderProps {
    title: string
    children?: ReactNode
}

function Header({title, children}: HeaderProps){
    return(
        <header className=" w-full flex justify-between items-center text-3xl font-medium ">
            {title}

            <div className="flex items-center gap-3">
                {children}
            </div>
        </header>
    )
}

export default Header