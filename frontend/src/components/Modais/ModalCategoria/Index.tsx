import Button from "@/components/Button/Index"
import Input from "@/components/Input/Index"
import Select from "@/components/Select/Index"

function ModalCategoria(){
    return(
        <>
            <Input  placeholder="Ex. Alimentação">
                <span>nome:</span>
            </Input>

            <div className="self-end">
                <Button variant="tertiary" label="salvar"/>
            </div>

        </>
    )
}

export default ModalCategoria