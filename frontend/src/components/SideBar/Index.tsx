'use client'

import { useEffect, useRef, useState } from "react"
import IconDashboard from "../../../public/IconDashboard"
import IconExtrato from "../../../public/IconExtrato"
import IconOrcamento from "../../../public/IconOrcamento"
import ItemSideBar from "./ItemSideBar/Index"
import IconLogOut from "../../../public/IconLogOut"
import { useRouter } from "next/navigation"

const itemSideBar = [
    {
        'label': 'Dashboard',
        'icon': <IconDashboard width="20"/>,
        'router': 'dashboard'
    },
    {
        'label': 'Extrato',
        'icon': <IconExtrato width="20"/>,
        'router': 'extrato'
    },
    {
        'label': 'Orçamento',
        'icon': <IconOrcamento width="20"/>,
        'router': 'orcamento'
    },
]

function Sidebar(){
    const [selected, setSelected] = useState('Dashboard')
    const [activeIndex, setActiveIndex] = useState(0)
    const indicatorRef = useRef<HTMLDivElement>(null)
    const itemsRefs = useRef<(HTMLButtonElement | null)[]>([])

    const navigate = useRouter()

    const handleSelected = (selected: string, index: number, router: string) => {
        setSelected(selected)
        setActiveIndex(index)
        navigate.push(router.toLowerCase())
    }

    useEffect(()=>{
        const current = itemsRefs.current[activeIndex]
        const indicator = indicatorRef.current

        if( current && indicator){
            const offsetTop = current.offsetTop
            indicator.style.top = `${offsetTop+1}px`
        }
    }, [activeIndex])

    return(
        <aside className="relative border-r-1 border-[#B6B6B6] h-screen w-64 p-7 flex flex-col justify-between">

            <div>
                <div>
                    <h2 className="font-bold text-2xl px-3">PODNV</h2>
                </div>

                <div ref={indicatorRef} className="absolute w-[42px] h-[42px] -z-20 bg-linear-to-r from-[#FFCD7D] to-[#FFA2DA] opacity-80 rounded-xl transition-all duration-300 ease-in-out left-[31px]" style={{top: 115}}></div>

                <div className="mt-14">
                    {itemSideBar.map((item, index)=>(
                        <ItemSideBar 
                        key={index}
                        ref={(el: any)=>(itemsRefs.current[index] = el)}
                        label={item.label} 
                        selected={selected==item.label} 
                        onClick={()=>handleSelected(item.label, index, item.router)}>
                            {item.icon}
                        </ItemSideBar>
                    ))}
                </div>
            </div>

            <ItemSideBar label="sair" selected={false} >
                <IconLogOut width="22"/>
            </ItemSideBar>

        </aside>
    )
}

export default Sidebar