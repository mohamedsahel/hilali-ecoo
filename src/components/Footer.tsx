import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { FiYoutube, FiPhoneCall } from 'react-icons/fi'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <div className="bg-teal-900 text-white py-3">
        <div className="grid grid-cols-4 my-12 mx-48">
          <div className="">
            <Link href="/">
              <p className="cursor-pointer">hilali shop</p>
            </Link>
            <p className="my-4 cursor-pointer">
              Commonly a shop or other establishment.
            </p>
          </div>
          <div className="cursor-pointer">
            subscribe to get umportant updates
            <input
              type="text"
              placeholder="your e-mail"
              className="px-3 my-2 py-1 border-2"
            />
            <button className="bg-green-500 px-3 py-2 my-2 font-medium">
              subscripe
            </button>
          </div>
          <div className="mx-6">
            <h6 className="cursor-pointer">follws us</h6>
            <div className="flex justify-between ">
              <AiOutlineTwitter className="text-3xl rounded-full border-2 border-white m-3 p-1 cursor-pointer" />
              <FiYoutube className="text-3xl rounded-full border-2 border-white m-3 p-1 cursor-pointer" />
              <AiOutlineInstagram className="text-3xl rounded-full border-2 border-white m-3 p-1 cursor-pointer" />
            </div>
          </div>
          <div>
            <p className="cursor-pointer">
              {' '}
              <FiPhoneCall />
              call us
            </p>
            <p className="cursor-pointer">+123456789</p>
          </div>
        </div>
        <div>
          <span className="">
            _______________________________________________________________
          </span>
          <div className="flex justify-center">
            <p className="">@2023 HILALI bdfbgh fdjh.</p>
            <div className="mx-4">
              <h5>HILALI SHOP</h5>
              <h5>GR RHYUR rg'erg</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
