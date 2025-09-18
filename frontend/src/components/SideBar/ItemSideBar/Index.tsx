import { ButtonHTMLAttributes, cloneElement, forwardRef, ReactElement, ReactNode } from "react"

interface ItemSideBarProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactElement<{color: string}>
    label: string
    selected?: boolean
}

const ItemSideBar = forwardRef<HTMLButtonElement, ItemSideBarProps>(function ItemSideBar(
  { children, label, selected,  ...props },
  ref
) {

    const childrenWithProps = children ? cloneElement(children, {
        color: selected ? '#292929' : '#727272'
    }): null

    return (
        <button 
        {...props}
        ref={ref}
        className={`${selected ? 'text-[#292929] font-bold' : 'text-[#727272] font-medium hover:bg-[#F5F5F5] '} text-sm flex items-center gap-8 py-3 my-6 w-full px-4 rounded-lg`}>
            <div>
                {childrenWithProps}
            </div>

            <span>
                {label}
            </span>
        </button>
    )
})

export default ItemSideBar