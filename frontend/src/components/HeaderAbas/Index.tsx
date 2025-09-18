import Header from "../Header/Index"

type Options = {
    label : string
}

interface HeaderAbasProps {
    options: Options[]
    selected: string
    handleSelected: (item: string) => void
}

function HeaderAbas ({options, selected, handleSelected}: HeaderAbasProps){
    return(
        <div>
            <Header title="Receitas e Despesas"/>

            <div className="flex gap-2">

                {options.map((item, index)=>(
                    <div onClick={()=>handleSelected(item.label)} key={index}>
                        <span className={`${selected === item.label ? 'text-amber-700': 'text-black'}`}>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HeaderAbas