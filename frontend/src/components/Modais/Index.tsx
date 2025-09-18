import { ReactNode } from "react"
import IconClose from "../../../public/IconClose"

interface ModalProps {
    children: ReactNode
    title: string
    onClick: () => void
}

function Modal({children, title, onClick}: ModalProps){
    return(
        <div className="absolute right-0 bottom-0 h-screen w-screen bg-black/50 flex justify-center items-center">
            <div className="bg-white w-[450px] rounded ">
                <div className="flex justify-between items-center px-8 py-5 font-semibold text-[#252525] text-lg border-b-1 border-b-[#D4D4D4]">
                    {title}

                    <button onClick={onClick}>
                        <IconClose width="16"/>
                    </button>
                </div>

                <div className="px-8 py-6 flex flex-col gap-6">
                    {children}
                </div>

            </div>
        </div>
    )
}

export default Modal