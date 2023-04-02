import Image from 'next/image'
import Link from 'next/link'
import img from '../../public/ShopImage.jpg'

export default function Info() {
  return (
    <div className="flex justify-between py-14 px-56 items-center">
      <div>
        <h6 className="text- my-1">WELCOME TO</h6>
        <h1 className="text-3xl font-semibold my-1">HILALI Store</h1>
        <p className="w-96 my-1">
          Commonly a shop or other establishment for the retail sale of
          commodities, but also a place where wholesale supplies are kept,
          exhibited, or sold.
        </p>
        {/* Retailing—the sale of merchandise to the consumer—is one of the oldest businesses in the world. */}
        <Link href="/allproduct">
          <button className="bg-green-500 my-3 py-2.5 px-5 text-white text-xs font-extrabold hover:bg-green-400">
            SHOP NOW
          </button>
        </Link>
      </div>
      <div className="relative">
        <Image src={img} alt="shop" width="290" height="220" />
      </div>
    </div>
  )
}
