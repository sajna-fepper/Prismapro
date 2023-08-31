import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  try {
    const data = [
      { name: 'Adnan Halilovic', describtion: 'Software development things',link: 'https://www.youtube.com/c/AdnanHalilovicDev', subscribers: 514},
      { name: 'Shemmis world ', describtion: 'kitchen things',link: 'https://www.youtube.com/c/Shammiskitchen', subscribers: 515},
      { name: 'Musiland', describtion: 'Islamic things',link: 'https://www.youtube.com/c/Mucilandislamicworl', subscribers: 516},
      { name: 'Simley my style', describtion: 'skincare things',link: 'https://www.youtube.com/c/simley', subscribers: 517 },
    ];

    
    const channel = { name: 'Smartart', describtion: 'craft things',link: 'https://www.youtube.com/c/smartart' , subscribers: 601, };

    const res = await prisma.youtube_channels.create({
      data: channel,
    });

    console.log(res);
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}

main();
