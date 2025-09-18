interface ContainerValuesProps {
    title: string
    value: string
}

function ContainerValues({title, value}:ContainerValuesProps){
    return(
        <div className="border-1 border-[#D8D8D8] w-full flex flex-col justify-between p-4 rounded gap-5 font-semibold">
            <span className="text-sm text-[#292929]">{title}</span>
            <span className="text-xl">{value}</span>
        </div>
    )
}

export default ContainerValues