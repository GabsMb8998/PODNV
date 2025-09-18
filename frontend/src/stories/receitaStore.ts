import { create } from "zustand"

type ReceitaState = {
    id?: number
    value: number
    frequency: boolean
    date?: Date | null
    installments?: number
}

interface ReceitaStore {
    receitas: ReceitaState[]
    selected: ReceitaState | null
    openModalPost: boolean
    openModalUpdate: boolean
    setReceitas: (receitas: ReceitaState[]) => void
    setSelected: (selected: ReceitaState) => void
    setOpenModalPost: (openModalPost: boolean) => void
    setOpenModaUpdate: (openModalUpdate: boolean) => void
    getReceita: () => void
    postReceita: (receita: ReceitaState) => void
    updateReceita: (receita: ReceitaState) => void
    deleteReceita: (id: number) => void
}

const useReceitaStore = create<ReceitaStore>((set)=>({
    receitas: [],
    selected: null,
    openModalPost: false,
    openModalUpdate: false,
    setReceitas(receitas) {
        set({receitas: receitas})
    },
    setSelected(selected) {
        set({selected: selected})
    },
    setOpenModalPost(openModalPost) {
        set({openModalPost: !openModalPost})
    },
    setOpenModaUpdate(openModalUpdate) {
        set({openModalPost: !openModalUpdate})
    },
    getReceita() {
        
    },
    postReceita(receita) {
        
    },
    updateReceita(receita) {
        
    },
    deleteReceita(id) {
        
    },
}))

export {useReceitaStore}