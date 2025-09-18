'use client'

import Sidebar from "@/components/SideBar/Index";
import IconAdd from "../../public/IconAdd";
import Button from "../components/Button/Index";
import Header from "../components/Header/Index";
import Input from "../components/Input/Index";
import Select from "../components/Select/Index";
import './globals.css'
import ContainerValues from "@/components/ContainerValues/Index";
import ContainerBorder from "@/components/ContainerBorder/Index";
import DespesasEReceitasDashboard from "@/components/Dashboards/DespesasEReceitasDashboard";
import DespesasDashboard from "@/components/Dashboards/DashboardDespesas.tsx/Index";
import { useState } from "react";
import Modal from "@/components/Modais/Index";
import ModalAddDespesa from "@/components/Modais/ModalAddDespesa/Index";
import ModalAddOrcamento from "@/components/Modais/ModalOrcamento/Index";
import ModalAddCategoria from "@/components/Modais/ModalCategoria/Index";

export default function Home() {

  const [openModalAddDespesa, setOpenModalAddDespesa] = useState(false)

  const openModal = () => {
    setOpenModalAddDespesa(!openModalAddDespesa)
  }
  return (

    <div className="p-12 w-full"> 

        <Header title="Informações Gerais">
          <Button variant="primary" label="adicionar despesa" onClick={openModal}>
            <IconAdd/>
          </Button>
        </Header>

        <section className="flex w-full gap-3 mt-7">
          <ContainerValues title="Total de receitas" value="R$ 1412"/>
          <ContainerValues title="Total de despesas" value="R$ 1412"/>
          <ContainerValues title="Saldo Atual" value="R$ 0"/>
          <ContainerValues title="% orçamento" value="100%"/>
        </section>

        <section className="w-full  flex gap-4 mt-3">

          <div className="w-full">

             <ContainerBorder label={'Despesas'}>
              <DespesasDashboard/>
            </ContainerBorder> 
             
          </div>

          <div className="w-full">
            <ContainerBorder label={'Despesas e receitas'}>
                  <DespesasEReceitasDashboard/>
              </ContainerBorder>

            <ContainerBorder label={'categorias mais gastas'}>

            </ContainerBorder>
          </div>
  

        </section>

        {openModalAddDespesa && (
          <Modal title="Atualizar orçamento" onClick={()=>setOpenModalAddDespesa(false)}>
            <ModalAddCategoria/>
          </Modal>
        )}
  
    </div>
  );
}

