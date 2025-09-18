import Button from "@/components/Button/Index"
import Input from "@/components/Input/Index"
import Select from "@/components/Select/Index"

function ModalOrcamento(){
    return(
        <>
            <Input width="100" placeholder="R$ 00,00">
                <span>valor:</span>
            </Input>
            <Select>
                <span>categoria</span>
            </Select>

            <div className="self-end">
                <Button variant="tertiary" label="salvar"/>
            </div>

        </>
    )
}

export default ModalOrcamento