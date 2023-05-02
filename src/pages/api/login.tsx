import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import bcrypt from 'bcrypt'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req
  if (method === 'POST') {
    const { email, password } = req.body

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    })

    if (user) {
      const isValidPassword = await bcrypt.compare(password, user.password)

      if (isValidPassword) {
        return res.status(200).json({
          id: user.id,
          name: user.name,
          email: user.email,
        })
      }

      return res.status(400).json({ message: 'Invalid password' })
    } else {
      return res.status(404).json({ message: 'User not found' })
    }

    // return res.status(200).json(user)
  }
}
