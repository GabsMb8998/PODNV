'use client'

import Button from "@/components/Button/Index"
import Header from "@/components/Header/Index"
import IconAdd from "../../../public/IconAdd"
import ContainerBorder from "@/components/ContainerBorder/Index"
import IconRecentes from "../../../public/iconRecentes"

import IconAlimentacao from "../../../public/iconAlimentacao"
import ContainerCategoria from "@/components/ContainerCategoria/Index"
import Categoria from "@/components/Categoria/Index"
import { useDespesaStore } from "@/stories/despesaStore"
import { useReceitaStore } from "@/stories/receitaStore"
import Modal from "@/components/Modais/Index"
import ModalAddDespesa from "@/components/Modais/ModalAddDespesa/Index"


function Extrato(){

    const {
        openModalPost: modalDespesa,
        setOpenModalPost: setModalDespesa
    } = useDespesaStore()

    const {
        openModalPost: modalReceita,
        setOpenModalPost: setModalReceita
    } = useReceitaStore()

    const {
        openModalPost: modalDespesa,
        setOpenModalPost: setModalDespesa
    } = useDespesaStore()

    const {
        openModalPost: modalReceita,
        setOpenModalPost: setModalReceita
    } = useReceitaStore()

    const [selected, setSelected] = useState('Teste')

    return(
        <main className="w-full p-10">
            <Header title="Receitas e Despesas">
                <Button label="adicionar receita" variant="secondary" onClick={() => setModalReceita(modalReceita)}>
                    <IconAdd width="18"/>
                </Button>
                
                <Button label="adicionar despesa" variant="primary" onClick={() => setModalDespesa(modalDespesa)}>
                    <IconAdd width="18"/>
                </Button>
            </Header>


            <div className="flex gap-4 h-[84%] mt-7">

                <section className="w-full">
                    <ContainerBorder iconChildren={<IconRecentes width="20"/>} label="recentes">
                    <div className="max-h-[330px]  overflow-y-auto">

                        <div className="flex flex-col gap-3 ">
                            
                            <div className="self-end">
                                <span className="text-[#393939] font-semibold">07/08</span>
                            </div>

                            <div>
                                <ContainerCategoria color="text-[#CC4444]">
                                    <Categoria name={'Alimentação'} description="Aniversário mari/ Armázem" color="#FFDCBC">
                                        <IconAlimentacao width="24"/>
                                    </Categoria>
                                    <span>R$ 39,98</span>
                                </ContainerCategoria>
                            </div>
                        </div>
      
                    </div>

                    </ContainerBorder>
                </section>


                
                <section className="w-[50%]">
                    <ContainerBorder label="recorrentes">
                    </ContainerBorder>
                </section>

                {modalReceita && (
                    <Modal title="Adicionar receita" onClick={()=>setModalReceita(modalReceita)}>
                        <ModalAddDespesa/>
                    </Modal>
                )}

                {modalDespesa && (
                      <Modal title="Adicionar despesa" onClick={()=>setModalDespesa(modalDespesa)}>
                        <ModalAddDespesa/>
                    </Modal>
                )}
            </div>


        </main>
    )
}

export default Extrato