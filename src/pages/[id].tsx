import Store from '@/components/Store'
import { getAllData, Product } from '@/types'
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { IoStorefrontSharp } from 'react-icons/io5'
import { SiAdguard } from 'react-icons/si'
import { MdOutlineDiscount } from 'react-icons/md'
import { TbTruckDelivery, TbReplaceFilled } from 'react-icons/tb'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import { useState } from 'react'

export default function buynow({ product }: { product: Product }) {
  // const router = useRouter()
  // const {query} = router
  // console.log(query)
  const addProduct = Store((state: any) => state.addProduct)
  const add = () => {
    addProduct(product)
  }

  // handelPicturs
  const [inx, setInx] = useState(0)
  console.log('howa  ', inx)

  // Rating
  const rating = Array.from({ length: 5 }, (element, index) => {
    return (
      <div key={index}>
        {product.rating >= index + 1 ? (
          <BsStarFill className="text-yellow-400" />
        ) : product.rating >= index + 0.5 ? (
          <BsStarHalf className="text-yellow-400" />
        ) : (
          <BsStarFill className="text-gray-300" />
        )}
      </div>
    )
  })

  // discountPercentage
  const discountPercentage = product.discountPercentage * (product.price / 100)
  const tot = Math.trunc(discountPercentage + product.price)

  // prisma
  const submitData = async (title: any, description: any, price: any) => {
    try {
      const body = { title, description, price }
      await fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      // await Router.push('/drafts');
    } catch (error) {
      console.error(error)
    }
  }
  // title: title,
  // description: description,
  // price: price,
  // discountPercentage: discountPercentage,

  return (
    <>
      {/* ho  = {query.buynow} */}
      {
        <div className="flex justify-around my-24 mx-14">
          <div className="flex ">
            <div>
              {product.images.map((data, index) => {
                return (
                  <Image
                    className="mb-3 border-green-500"
                    src={data}
                    alt=""
                    width="100"
                    height="150"
                    key={index}
                    onClick={() => setInx(index)}
                  />
                )
              })}
            </div>
            <div className="h-72 w-72 m-6">
              <Image
                src={product.images[inx]}
                alt={product.title}
                width="330"
                height="370"
              />
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold my-3">
              {product.title} ({' '}
              <span className="text-gray-500 font-light">
                {product.category}
              </span>{' '}
              )
            </h2>
            <h4 className="flex my-2 text-lg">{rating}</h4>
            <h5 className="font-medium mb-4">
              Price :{' '}
              <span className="font-semibold text-green-400">
                {product.price}{' '}
              </span>
              $
              <span>
                {' '}
                <del className="text-red-400">{tot}</del>{' '}
              </span>
              $
            </h5>
            <h6 className="w-3/5 text-gray-300">{product.description}</h6>
            <div className="flex my-4">
              <div className="mr-5">
                <TbTruckDelivery
                  size={37}
                  className="bg-green-300 p-2 rounded-full"
                />
                <small className="text-gray-500">
                  <ins>Free Delivery</ins>
                </small>
              </div>
              <div className="mr-5">
                <TbReplaceFilled
                  size={37}
                  className="bg-green-300 p-2 rounded-full"
                />
                <small className="text-gray-500">
                  <ins>20 Days Replacement</ins>
                </small>
              </div>
              <div className="mr-5">
                <MdOutlineDiscount
                  size={37}
                  className="bg-green-300 p-2 rounded-full"
                />
                <small className="text-gray-500">
                  <ins>العربون لا ههه</ins>
                </small>
              </div>
              <div className="mr-5">
                <SiAdguard
                  size={35}
                  className="bg-green-300 p-2 rounded-full"
                />
                <small className="text-gray-500">
                  <ins>1 Year of guaranty</ins>
                </small>
              </div>
            </div>
            <h5 className="font-semibold mt-3">
              Available :
              <span>
                {product.stock === 0 ? (
                  <span> Over</span>
                ) : (
                  <span> in Stock</span>
                )}
              </span>
            </h5>
            <h5 className="font-semibold mt-2 mb-6">
              Brand : <span>{product.brand}</span>
            </h5>
            <button
              className="my-3 flex text-sm bg-green-500 p-2 hover:bg-green-400 font-medium"
              onClick={() => {
                add(),
                  submitData(product.title, product.description, product.price)
              }}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      }
    </>
  )
}

// export const getStaticPaths = async () => {
//   const res = await fetch('https://dummyjson.com/products')
//   const {products}: getAllData = await res.json()

//   return{
//     paths:
//       products.map((data)=>{
//         return{
//           params:{ id: String(data.id) }
//         }
//       }),
//       fallback: false
//   }
// }

// export async function getStaticProps({params}: { params: {id: string} }){
//   const res = await fetch(`https://dummyjson.com/product/${params.id}`)
//   const product = await res.json()
//   return{
//     props:{
//       product: product,
//     }
//   }
// }

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query
  const res = await fetch(`https://dummyjson.com/product/${id}`)
  const product = await res.json()
  return {
    props: {
      product: product,
    },
  }
}
