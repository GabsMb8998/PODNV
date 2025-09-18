import { ButtonHTMLAttributes, cloneElement, ReactElement, ReactNode } from "react"


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
    children?: ReactElement<{color: string}>
    variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
} 

const buttonStyles = {

        'primary' : {
            'container': 'hover:brightness-95',
            'button': 'bg-linear-to-r from-[#FFC18C] to-[#FDB5F7] rounded py-3 text-sm',
            'span': ''
        },
        'secondary' : {
            'container': 'hover:brightness-95 bg-linear-to-r from-[#E9B700] to-[#FF6BF8] p-[2px] rounded ', 
            'button': 'rounded-[1px] hover:bg-[#f6f6f6] rounded py-3 text-sm font-semibold ',
            'span': 'bg-clip-text text-transparent bg-gradient-to-r from-[#E9B700] to-[#FF6BF8]'
        },
        'tertiary' : {
            'container': 'hover:brightness-95', 
            'button': 'bg-linear-to-r from-[#FD9D6D] to-[#FF91F6] hover:bg-[#fff] w-32 rounded py-[6px] ',
            'span': 'text-white text-[16px]'
        },
        'quaternary' : {
            'container': 'hover:brightness-95', 
            'button': 'bg-white border-[1px] border-[#C1C1C1] rounded w-32 py-2',
            'span': 'text-[#3a3a3a]'
        }
    }

    function Button({children, label, variant, ...props} : ButtonProps){
        
        const classes = buttonStyles[variant]
        const childrenWithProps = children ? cloneElement(children, {
            color: variant == 'secondary' ? '#EBB016' : '#333'
        }) : null

        return (
            <div className={`${classes.container}`}>
                <button 
                {...props} 
                className={`${classes.button}  bg-white flex justify-center items-center px-5 gap-3 font-semibold text-[#414141] text-lg  duration-150 `}>
                    {childrenWithProps}
                    <span className={`${classes.span}`}>
                        {label}
                    </span>
                </button>
            </div>
    )

}

export default Button