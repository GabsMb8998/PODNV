import { create } from "zustand"

type CategoriaState = {
    id: number
    name: string
    color: string
    icon: string
}

interface CategoryStore {
    categorias: CategoriaState[]
    selected: CategoriaState | null
    openModalPost: boolean
    openModalUpdate: boolean
    setCategorias: (categorias: CategoriaState[]) => void
    setSelected: (categoria: CategoriaState) => void
    setopenModalPost: () => void
    setopenModalUpdate: () => void
    getCategorias: () => void
    postCategorias: (categoria: CategoriaState) => void
    updateCategorias: (categoria: CategoriaState) => void
    deleteCategorias: (id: number) => void
}

const useCategoryStore = create<CategoryStore> ((set)=> ({

    categorias: [],
    selected: null,
    openModalPost: false,
    openModalUpdate: false,
    setCategorias(categorias) {
        set({categorias: categorias})
    },
    setSelected(categoria) {
        set({selected: categoria})
    },
    setopenModalPost() {
        set({openModalPost: !this.openModalPost})
    },
    setopenModalUpdate() {
        set({openModalUpdate: !this.openModalUpdate})
    },

    getCategorias() {},
    postCategorias(categoria) {},
    updateCategorias(categoria) {},
    deleteCategorias(id) {},
}))