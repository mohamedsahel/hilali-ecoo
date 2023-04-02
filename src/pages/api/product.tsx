import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req
  const { id } = req.query as { id: string } // for typescript

  if (method === 'GET') {
    const prod = await prisma.product.findUnique({
      where: {
        id,
      },
    })

    return res.json(prod)
  }

  if (method === 'POST') {
    const { title, description, price } = req.body

    const prod = await prisma.product.create({
      data: {
        title: title,
        description: description,
        price: price,
        // discountPercentage: discountPercentage,
      },
    })

    return res.status(200).json(prod)
  }

  if(method === 'DELETE') {
    const prod = await prisma.product.delete({
      where: {
        id
      }
    })

    return res.json('ok')
  }
}
