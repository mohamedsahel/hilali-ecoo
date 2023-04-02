import { Product } from '@/types'
import Link from 'next/link'
import { MdOutlineLocalGroceryStore } from 'react-icons/md'
import { IoStorefrontSharp } from 'react-icons/io5'
import { FaBookmark, FaShopify } from 'react-icons/fa'
import { SiGooglemaps } from 'react-icons/si'
import { BiLogIn } from 'react-icons/bi'
import Store from './Store'

export default function Navbar() {
  const arr: Product[] = Store((state: any) => state.arr)

  return (
    <div className="flex justify-between py-1 bg-green-100 sticky top-0 z-50">
      <div className="self-center m-1 py-2.5 px-1 border-2 border-black cursor-pointer">
        <span className="bg-green-500 text-white py-2 px-4 font-medium">
          HILALI
        </span>
        <span className="py-2 px-4 text-neutral-900 font-medium">STORE</span>
      </div>
      <ul className="flex p-2 m-1 font-semibold cursor-pointer">
        <Link href="/">
          <li className="m-2 flex text-sm border-b-2 border-green-500">
            <IoStorefrontSharp className="mx-1 text-green-500  text-lg" /> HOME
          </li>
        </Link>
        <Link href="/about ">
          <li className="m-2 flex text-sm hover:border-b-2 border-green-500">
            <FaBookmark className="mx-1 text-lg hover:text-green-500" /> ABOUT
            US
          </li>
        </Link>
        <Link href="/allproduct">
          <li className="m-2 flex text-sm hover:border-b-2 border-green-500">
            <FaShopify className="mx-1 text-lg hover:text-green-500" /> PRODUCTS
          </li>
        </Link>
        <Link href="/contact">
          <li className="m-2 flex text-sm hover:border-b-2 border-green-500">
            <SiGooglemaps className="mx-1 text-lg hover:text-green-500" />{' '}
            CONTACT
          </li>
        </Link>
        <Link href="/login">
          <li className="m-0.5 flex text-sm bg-green-500 p-2 hover:bg-green-400">
            <BiLogIn className="mx-1 text-lg" /> LOG IN
          </li>
        </Link>
        <Link href="/card">
          <li className="m-1 flex text-sm relative bg-green-500 p-2 rounded-full hover:bg-green-400">
            {' '}
            <MdOutlineLocalGroceryStore className="mx-1 text-lg" />
            <span className="absolute top-0 right-0 text-xs">{arr.length}</span>
          </li>
        </Link>
      </ul>
    </div>
  )
}
