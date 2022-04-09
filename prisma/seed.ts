import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
    {
      name: 'Test 1',
      email: 'testone@test.com',
      movies: {
        create: [
            {
                title: "The Terminator",
                overview: "In the post-apocalyptic future, reigning tyrannical supercomputers teleport a cyborg assassin known as the \"Terminator\" back to 1984 to kill Sarah Connor, whose unborn son is destined to lead insurgents against 21st century mechanical hegemony. Meanwhile, the human-resistance movement dispatches a lone warrior to safeguard Sarah. Can he stop the virtually indestructible killing machine?",
                imageUrl: "https://image.tmdb.org/t/p/original/qvktm0BHcnmDpul4Hz01GIazWPr.jpg"
              },
              {
                title: "Terminator 2: Judgment Day",
                overview: "Nearly 10 years have passed since Sarah Connor was targeted for termination by a cyborg from the future. Now her son, John, the future leader of the resistance, is the target for a newer, more deadly terminator. Once again, the resistance has managed to send a protector back to attempt to save John and his mother Sarah.",
                imageUrl: "https://image.tmdb.org/t/p/original/weVXMD5QBGeQil4HEATZqAkXeEc.jpg"
              },
              {
                title: "Terminator 3: Rise of the Machines",
                overview: "It's been 10 years since John Connor saved Earth from Judgment Day, and he's now living under the radar, steering clear of using anything Skynet can trace. That is, until he encounters T-X, a robotic assassin ordered to finish what T-1000 started. Good thing Connor's former nemesis, the Terminator, is back to aid the now-adult Connor … just like he promised.",
                imageUrl: "https://image.tmdb.org/t/p/original/vvevzdYIrk2636maNW4qeWmlPFG.jpg"
              },
              {
                title:  "Terminator: Dark Fate",
                overview: "Decades after Sarah Connor prevented Judgment Day, a lethal new Terminator is sent to eliminate the future leader of the resistance. In a fight to save mankind, battle-hardened Sarah Connor teams up with an unexpected ally and an enhanced super soldier to stop the deadliest Terminator yet.",
                imageUrl: "https://image.tmdb.org/t/p/original/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg"
              },
        ],
      },
    },
  ]
  
  async function main() {
    console.log(`Start seeding ...`)
   
    for (const u of userData) {
      const user = await prisma.user.create({
        data: u,
      })
      console.log(`Created user with id: ${user.id}`)
    }
    console.log(`Seeding finished.`)
  }
  
  main()
    .catch((e) => {
      console.error(e)
      process.exit(1)
    })
    .finally(async () => await prisma.$disconnect)
  