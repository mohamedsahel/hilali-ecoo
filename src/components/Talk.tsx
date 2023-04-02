import Image from 'next/image'
import img from '../../public/zaligaton.jpg'

export default function Talk() {
  return (
    <>
      <div className="relative">
        <Image
          src={img}
          alt=""
          width="300"
          height="30"
          className=" mx-20 my-4"
        />
        <div className="absolute top-1/3 right-64">
          <input
            type="text"
            className="py-2 px-4 m-5 border-2 w-96 border-green-500"
            placeholder="...."
          />
          <button className="bg-green-500 px-3 py-2 font-medium">
            Talk To Us
          </button>
        </div>
      </div>
    </>
  )
}
