import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class User {

  async getuser() {
    const userData = await prisma.companyList.findMany({
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    userEmail: true
                }
            }
        }
    })
    return userData
  }
}

export default new User