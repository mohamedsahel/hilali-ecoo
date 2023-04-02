import { getAllData, Product } from '@/types'
import { GetStaticProps } from 'next'
import { create } from 'zustand'

export interface CartSlice {
  optionValuef: string
  allInNewArr: Product[]
  arr: Product[]
  cart: Product[]
}

const useCart = create<CartSlice>((set, get) => ({
  optionValuef: '',
  allInNewArr: [],
  arr: [],
  cart: [],
  // addProduct:(product:Product[]) => set((state:any) => ({ arr:[...state.arr, product] })),
  addProduct: (product: Product) => {
    const arr = get().arr
    const findProduct = arr.find((p) => p.id === product.id)
    if (findProduct) {
      // set((state:any) => ({ arr:[...state.arr, findProduct.quantity! += 1] }))
      set({
        arr: get().arr.map((p) =>
          p.id === product.id ? { ...p, quantity: (p.quantity! += 1) } : p
        ),
      })
      // findProduct.quantity! += 1;
    } else {
      // set({ arr: [...arr, {...product, quantity: 1}] })
      arr.push({ ...product, quantity: 1 })
    }
    set({ arr: get().arr })
  },
  delProduct: (product: Product) => {
    // const arr = get().arr;
    //     arr.filter(p => p.id !== product.id)
    set({ arr: get().arr.filter((produc) => produc.id !== product.id) })
  },
  delQuantProd: (product: Product) => {
    // const arr = get().arr;
    const findProd = get().arr.find((p) => p.id === product.id)
    if (findProd?.quantity! === 1) {
      set({ arr: get().arr.filter((p) => p.id !== product.id) })
    } else {
      set({
        arr: get().arr.map((p) =>
          p.id === product.id ? { ...p, quantity: (p.quantity! -= 1) } : p
        ),
      })
    }
    set({
      arr: get().arr,
    })
  },
  getAllProd: (product: Product) => {
    set(() => ({ allInNewArr: [product] }))
    // set({allInNewArr: get().allInNewArr.push({...product})})
  },
  lowestFilter: (products: Product[], optionValue: string) => {
    if (optionValue === 'lowest') {
      products.sort((a, b) => {
        return a.price - b.price
      })
      set({ optionValuef: optionValue })
    } else if (optionValue === 'highest') {
      products.sort((a, b) => {
        return b.price - a.price
      })
      set({ optionValuef: optionValue })
    } else {
      products.sort((a, b) => {
        return b.price - a.price
      })
      set({ optionValuef: optionValue })
    }
  },
}))

export default useCart
