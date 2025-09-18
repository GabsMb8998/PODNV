import { create } from "zustand";

export type DespesaState = {
    id?: number;
    value: number;
    description: string;
    frequency: boolean;
    date?: Date | null;
    installments?: number;
    categoriaID: number
}

interface DespesaStore {
    despesas: DespesaState[]
    selected: DespesaState | null
    openModalPost: boolean
    openModalUpdate: boolean
    setDespesas: (despesas: DespesaState[]) => void
    setSelected: (despesa: DespesaState) => void
    setOpenModalPost: (openModalPost: boolean) => void
    setOpenModalUpdate: (openModalUpdate: boolean) => void
    getDespesas: () => void
    postDespesas: (despesa: DespesaState) => void
    updateDespesa: (despesa: DespesaState) => void
    deleteDespesa: (id: number) => void
}

const useDespesaStore = create<DespesaStore> ((set)=> ({
    despesas: [],
    selected: null,
    openModalPost: false,
    openModalUpdate: false,

    setDespesas(despesas) {
        set({despesas: despesas})
    },
    setSelected: (despesa) => {
        set({selected: despesa})
    },
    setOpenModalPost(openModalPost) {
        set({openModalPost: !openModalPost})
    },
    setOpenModalUpdate(openModalUpdate) {
        set({openModalUpdate: !openModalUpdate})
    },
    getDespesas: async () => {
    },
    postDespesas: async (despesa) => {
    },
    updateDespesa(despesa) {
    },
    deleteDespesa(id) {
    },
}))

export {useDespesaStore}