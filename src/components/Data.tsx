import { Product } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

export default function Data({ products }: { products: Product[] }) {
  return (
    <div className="bg-green-100">
      <div className="mx-16">
        <h6 className="font-bold my-5 py-5">some products</h6>
        <div className="grid grid-cols-3 gap-1 cursor-pointer">
          {products.slice(15, 18).map((data) => {
            return (
              <div
                className="my-4 p-2 bg-white border-none w-72 max-w-xs h-2/5 relative hover:bg-slate-300"
                key={data.id}
              >
                <Image
                  src={data.thumbnail}
                  alt={data.title}
                  width="300"
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
            )
          })}
        </div>
      </div>
    </div>
  )
}
