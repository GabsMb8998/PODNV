import { create } from "zustand"

type OrcamentoState = {
    id?: number
    value: number
    usage: number
    perUsage: number
    categoryID: number
}

interface OrcamentoStore {
    orcamentos: OrcamentoState[]
    selected: OrcamentoState | null

    openModalPost: boolean
    openModalUpdate: boolean

    setOrcamentos: (orcamentos: OrcamentoState[]) => void
    setSelected: (selected: OrcamentoState) => void

    setOpenModalPost: () => void
    setOpenModalUpdate: () => void

    getOrcamentos: () => void
    postOrcamentos: (orcamento: OrcamentoState) => void
    updateOrcamento: (orcamento: OrcamentoState) => void
    deleteOrcamento: (id: number) => void
}

const useOrcamentoStore = create<OrcamentoStore> ((set)=> ({

    orcamentos: [],
    selected: null,
    openModalPost: false,
    openModalUpdate: false,

    setOrcamentos(orcamentos) {
        set({orcamentos: orcamentos})
    },
    setSelected(selected) {
        set({selected: selected})
    },
    setOpenModalPost() {
        set({openModalPost: !this.openModalPost})
    },
    setOpenModalUpdate() {
        set({openModalUpdate: !this.openModalUpdate})
    },

    getOrcamentos() {},
    postOrcamentos(orcamento) {},
    updateOrcamento(orcamento) {},
    deleteOrcamento(id) {},
}))