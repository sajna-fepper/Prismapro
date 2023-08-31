import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

//one-to-one


async function main() {
  // ... you will write your Prisma Client queries here

  //create user
  const user = await prisma.user.create({
    data: {},
  });

  // create a profile
  const profile = await prisma.profile.create({
    data: {
      name: 'sanashafi',
      userId: user.id,
    },
  });

  await prisma.user.create({
    data: {
      profile: {
        create: { name: 'fathima sajna' },
      },
    },
  })

  const allUsers = await prisma.user.findMany({
    include: {
      profile: true,
    },
  })
  console.log(allUsers)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })

  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
