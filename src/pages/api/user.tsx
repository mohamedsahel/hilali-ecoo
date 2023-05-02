import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req

  if (method === 'GET') {
    const users = await prisma.user.findMany()

    return res.json(users)
  }

  if (method === 'POST') {
    const { name, email, password, conpassword } = req.body

    const users = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
        conpassword: conpassword,
      },
    })

    return res.status(200).json(users)
  }
}
