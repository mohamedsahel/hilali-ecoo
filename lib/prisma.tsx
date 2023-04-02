import { PrismaClient } from '@prisma/client'
// let prisma;

// if (typeof window === "undefined") {
//     if (process.env.NODE_ENV === "production") {
//         prisma = new PrismaClient();
//     } else {
//         if (!global.prisma) {
//             global.prisma = new PrismaClient();
//         }

//         prisma = global.prisma;
//     }
// }

// export default prisma;

declare global {
  var prisma: PrismaClient | undefined
}

export const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') global.prisma = prisma
