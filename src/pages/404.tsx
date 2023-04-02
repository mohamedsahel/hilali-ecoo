import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [])

  return (
    <div className="m-20">
      <h1 className="">Oooops...</h1>
      <h2>That page cannot be found</h2>
      <h3>
        Back to the <Link href="/">HOME</Link> page
      </h3>
    </div>
  )
}
