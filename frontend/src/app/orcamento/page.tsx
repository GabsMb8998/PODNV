import Button from "@/components/Button/Index"
import Header from "@/components/Header/Index"
import IconAdd from "../../../public/IconAdd"

function Orcamento(){
    return(
        <main className="w-full p-10">
            <Header title="Orçamentos / Categorias">
                <Button label="adicionar orçamento" variant="secondary">
                    <IconAdd width="18"/>
                </Button>
                
                <Button label="adicionar categoria" variant="primary">
                    <IconAdd width="18"/>
                </Button>
            </Header>

        </main>
    )
}

export default Orcamento