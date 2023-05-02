import { IRegisterUpData } from '@/types'
import { useState } from 'react'

export default function register() {
  const [name, setname] = useState('')
  const [regEmail, setregEmail] = useState('')
  const [regPassword, setregPassword] = useState('')
  const [regConfPassword, setregConPassword] = useState('')
  const [errors, seterrors] = useState<IRegisterUpData>({
    name: '',
    email: '',
    password: '',
  })

  const handleSubmit = () => {
    // ev.preventDefault()
    seterrors(valide(name, regEmail, regPassword))
    console.log(errors)
  }

  const valide = (name: any, emailrg: any, passwordrg: any) => {
    let eror: IRegisterUpData = {
      name: '',
      email: '',
      password: '',
    }
    const emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if (name === '') {
      eror.name = 'rak khliti name khawi'
    } else {
      eror.email = ''
    }

    if (emailrg === '') {
      eror.email = 'rak khliti email khawi'
    } else if (!emailPattern.test(emailrg)) {
      eror.email = 'had email makhdamch'
    } else {
      eror.email = ''
    }

    if (passwordrg === '') {
      eror.password = 'rak khliti password khawi'
    } else if (!passwordPattern.test(passwordrg)) {
      eror.password = 'had password makhdamch'
    } else {
      eror.password = ''
    }

    return eror
  }

  // const createUser = async (
  //   name: any,
  //   regEmail: any,
  //   regPassword: any,
  //   regConfPassword: any
  // ) => {
  //   try {
  //     const body = { name, regEmail, regPassword, regConfPassword }
  //     await fetch('http://localhost:3000/api/user', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(body),
  //     })
  //     // await Router.push('/drafts');
  //   } catch (error) {
  //     console.log(error)
  //   }

  // }
  console.log(name, regEmail, regPassword, regConfPassword)


  return (
    <>
      <section className="bg-gray-300 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              {/* <form className="space-y-4 md:space-y-6" action="#"> */}
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    name="taxt"
                    id="text"
                    value={name}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="your name"
                    onChange={(e) => {
                      setname(e.target.value)
                    }}
                    maxLength={10}
                  />
                  <span className="text-red-600">{errors.name}</span>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={regEmail}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    onChange={(e) => {
                      setregEmail(e.target.value)
                    }}
                  />
                  <span className="text-red-600">{errors.email}</span>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    value={regPassword}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => {
                      setregPassword(e.target.value)
                    }}
                  />
                  <span className="text-red-600">{errors.password}</span>
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="confirm-password"
                    name="confirm-password"
                    id="confirm-password"
                    value={regConfPassword}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => setregConPassword(e.target.value)}
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{' '}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        //   href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  onClick={() => {
                    handleSubmit()
                      // createUser(name, regEmail, regPassword, regConfPassword)
                  }}
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{' '}
                  <a
                    //   href="register"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
