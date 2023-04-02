import Products from '@/components/Products'
import { getAllData, Product } from '@/types'
import { GetServerSideProps, GetStaticProps } from 'next'
// import { useEffect } from "react";
import Store from '@/components/Store'

// hah
import { HiOutlineViewList } from 'react-icons/hi'
import { AiOutlineAppstore } from 'react-icons/ai'
// import Store from './Store'
// import { Product } from '@/types'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function ({ products }: { products: Product[] }) {
  // const addPro = Store((state:any)=>state.getAllProd)

  // useEffect(() => {
  // //   addPro(products)
  //     products
  // }, [])

  // return(
  //   <>
  //   <Products products={products}/>
  //   </>
  // )

  // hah

  const [productss, setProductss] = useState(products)

  // const select = document.querySelector('select')
  // const value = select?.options[select.selectedIndex].value
  const [val, setVal] = useState('')

  const lowestarr = (e: any) => {
    if (e === 'lowest') {
      setProductss(
        products.sort((a, b) => {
          return a.price - b.price
        })
      )
    } else if (e === 'highest') {
      setProductss(
        products.sort((a, b) => {
          return b.price - a.price
        })
      )
    } else if (e === 'a-z') {
      setProductss(
        products.sort((a, b) => {
          let x = a.title.toLowerCase()
          let y = b.title.toLowerCase()
          if (x < y) {
            return -1
          }
          if (x > y) {
            return 1
          }
          return 0
        })
      )
    } else {
      setProductss(
        products.sort((a, b) => {
          let x = a.title.toLowerCase()
          let y = b.title.toLowerCase()
          if (x < y) {
            return 1
          }
          if (x > y) {
            return -1
          }
          return 0
        })
      )
    }
  }

  const categoryFiltre = (categoryValue: string) => {
    setProductss(products.filter((data) => data.category === categoryValue))
  }
  const ALL = () => {
    setProductss(products.map((data) => data))
  }

  const [gridDirection, setGridDireciton] = useState(
    'grid grid-cols-3 gap-1 cursor-pointer my-6'
  )
  const direciton1Click = () => {
    setGridDireciton('grid ml-20 grid-cols-1 cursor-pointer mt-6')
  }
  const direciton3Click = () => {
    setGridDireciton('grid grid-cols-3 gap-1 cursor-pointer my-6')
  }

  const [inputFilterValue, setInputFilterValue] = useState('')
  const inputFilter = (e: any) => {
    setProductss(
      products.filter((data) => {
        return data.title.includes(e)
      })
    )
  }

  useEffect(() => {
    products
    // console.log(productss)
    // console.log('hoho',products)
  }, [val, categoryFiltre, ALL, inputFilter])

  return (
    <div className="my-6 mx-52">
      <div className="flex justify-between">
        <input
          type="text"
          placeholder=" search..."
          value={inputFilterValue}
          onChange={(e) => {
            setInputFilterValue(e.target.value), inputFilter(e.target.value)
          }}
          className="border-b-2 border-l-2"
          size={13}
        />
        <div className="flex">
          <HiOutlineViewList
            onClick={direciton1Click}
            size={22}
            className="cursor-pointer text-white bg-black b-3 mx-1 hover:bg-white hover:text-black"
          />
          <AiOutlineAppstore
            onClick={direciton3Click}
            size={22}
            className="cursor-pointer text-white bg-black b-3 hover:bg-white hover:text-black"
          />
        </div>
        <h6>{productss.length} total product</h6>
        <div>
          <form action="#">
            <label htmlFor="sort"></label>
            <select
              name="sort"
              id="sort"
              className="border-2"
              onChange={(e) => {
                lowestarr(e.target.value), setVal(e.target.value)
              }}
            >
              <option value="highest">price(highest)</option>
              <option value="lowest">price(lowest)</option>
              <option value="a-z">price(a-z)</option>
              <option value="z-a">price(z-a)</option>
            </select>
          </form>
        </div>
      </div>
      <div className="flex hh">
        <div className="my-5">
          <h6 className="my-2">Category</h6>
          <button className="my-1 text-gray-500 text-sm" onClick={ALL}>
            All
          </button>
          <div
            className="my-1 text-gray-500 text-sm cursor-pointer"
            onClick={() => {
              categoryFiltre('smartphones')
            }}
          >
            Mobile
          </div>
          <div
            className="my-1 text-gray-500 text-sm cursor-pointer"
            onClick={() => {
              categoryFiltre('laptops')
            }}
          >
            Laptop
          </div>
          <div
            className="my-1 text-gray-500 text-sm cursor-pointer"
            onClick={() => {
              categoryFiltre('fragrances')
            }}
          >
            Fragrances
          </div>
          <div
            className="my-1 text-gray-500 text-sm cursor-pointer"
            onClick={() => {
              categoryFiltre('groceries')
            }}
          >
            Groceries
          </div>
          <div
            className="my-1 text-gray-500 text-sm cursor-pointer"
            onClick={() => {
              categoryFiltre('skincare')
            }}
          >
            Skincare
          </div>
          <div
            className="my-1 text-gray-500 text-sm cursor-pointer"
            onClick={() => {
              categoryFiltre('home-decoration')
            }}
          >
            Home-Decoration
          </div>
          <div className="my-5">
            <h6 className="mt-3 mb-2">Company</h6>
            <form action="#">
              <label htmlFor="sorti"></label>
              <select
                name="sorti"
                id="sorti"
                className="border-2 active:border-gray-100"
              >
                <option value="All">All</option>
                <option value="Nokia">Nokia</option>
                <option value="Samsung">Samsung</option>
                <option value="Apple">Apple</option>
                <option value="Asus">Asus</option>
                <option value="Rolex">Rolex</option>
              </select>
            </form>
          </div>
          <h6 className="mt-5 mb-2">Colors</h6>
          <div>
            <span className="mr-1 cursor-pointer p-1 rounded-full text-red-400 bg-red-400">
              O
            </span>
            <span className="mr-1 cursor-pointer p-1 rounded-full text-gray-200 bg-gray-200">
              O
            </span>
            <span className="mr-1 cursor-pointer p-1 rounded-full text-black bg-black">
              O
            </span>
            <span className="mr-1 cursor-pointer p-1 rounded-full text-green-300 bg-green-300">
              O
            </span>
            <span className="mr-1 cursor-pointer p-1 rounded-full text-sky-400 bg-sky-400">
              O
            </span>
          </div>
          <h6 className="mt-7 mb-3">Price</h6>
          <h6>$30.000.00</h6>
          <input type="range" name="of" id="off" />
        </div>
        <div className=" overflow-auto mt-16 h-96">
          {
            // productss.length === 0 ?
            // <div>
            //     EMPTY
            // </div>
            // :
            <div className={gridDirection}>
              {productss
                // .filter(data=>{
                //     return(
                //         data.title.startsWith(inputFilter)
                //     )
                // })
                .map((data) => {
                  return (
                    <>
                      <div
                        className="my-4 p-2 bg-white border-none w-56 max-w-xs h-2/5 relative hover:bg-slate-300"
                        key={data.id}
                      >
                        <Image
                          src={data.thumbnail}
                          alt={data.title}
                          width="200"
                          height="60"
                        />
                        <div className="flex justify-between my-2">
                          <h6 className="">{data.title}</h6>
                          <h5>$ {data.price}</h5>
                        </div>
                        <Link
                          href={`/${data.id}`}
                          className="bg-gray-100 py-1 px-2 my-3 mx-3 flex justify-end absolute top-0 right-0 "
                        >
                          <button className="">read more...</button>
                        </Link>
                      </div>
                    </>
                  )
                })}
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://dummyjson.com/products')
  const { products }: getAllData = await res.json()
  console.log('products', products)

  // console.log('products',products)

  return {
    props: {
      products: products,
    },
  }
}
