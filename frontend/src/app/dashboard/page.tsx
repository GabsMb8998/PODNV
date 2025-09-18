'use client'

import '../globals.css'
import ContainerValues from "@/components/ContainerValues/Index";
import ContainerBorder from "@/components/ContainerBorder/Index";
import DespesasEReceitasDashboard from "@/components/Dashboards/DespesasEReceitasDashboard";
import DespesasDashboard from "@/components/Dashboards/DashboardDespesas.tsx/Index";
import Modal from "@/components/Modais/Index";
import ModalAddCategoria from "@/components/Modais/ModalCategoria/Index";
import Header from "@/components/Header/Index";
import Button from "@/components/Button/Index";
import IconAdd from "../../../public/IconAdd";
import { useState } from "react";
import { useDespesaStore } from '@/stories/despesaStore';

export default function Home() {

    const {
        openModalPost,
        setOpenModalPost
    } = useDespesaStore()

  return (

    <div className="p-12 w-full"> 

        <Header title="Informações Gerais">
          <Button variant="primary" label="adicionar despesa" onClick={()=>setOpenModalPost(openModalPost)}>
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

        {openModalPost && (
          <Modal title="Atualizar orçamento" onClick={()=>setOpenModalPost(openModalPost)}>
            <ModalAddCategoria/>
          </Modal>
        )}
  
    </div>
  );
}

