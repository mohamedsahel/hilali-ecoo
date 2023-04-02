import Store from '@/components/Store'
import { Product } from '@/types'
import Image from 'next/image'
import { useEffect } from 'react'

export default function () {
  const products: Product[] = Store((state: any) => state.arr)
  const addProduct = Store((state: any) => state.addProduct)
  const delProduct = Store((state: any) => state.delProduct)
  const delQuantProd = Store((state: any) => state.delQuantProd)
  const add = (prod: Product) => {
    addProduct(prod)
  }

  const del = (prod: Product) => {
    delProduct(prod)
  }

  const delQuan = (prod: Product) => {
    delQuantProd(prod)
  }

  console.log(products)

  return (
    <div>
      {products.length === 0 ? (
        <div>
          <h1>Empty</h1>
        </div>
      ) : (
        <div>
          {products.map((arr) => {
            return (
              <div className="flex" key={arr.id}>
                <Image
                  className="w-auto h-auto"
                  width="100"
                  height="100"
                  src={arr.thumbnail}
                  alt={arr.title}
                />
                <p>{arr.title}</p>
                <button onClick={() => delQuan(arr)}>---</button>
                {/* onMouseMove={()=> hiddenClick(event, arr.np)} */}
                <button>{arr.quantity}</button>
                <button onClick={() => add(arr)}>++++</button>
                <h4 className="total">${arr.quantity! * 200}</h4>
                <button className="DeletBtn" onClick={() => del(arr)}>
                  Delete
                </button>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
