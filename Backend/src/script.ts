import { prisma } from "./lib/prisma";

async function main() {
  // const user = await prisma.user.create({
  //   data: {
  //     name: "jhosue",
  //     lastName: "tipe",
  //     userName: "Geek1",
  //     password: "Jhosue24",
  //     notes: {
  //       create: {
  //         title: "Primera nota",
  //         content: "Contenido de la nota",
  //         status: "Pending",
  //       },
  //     },
  //   },
  //   include: {
  //     notes: true,
  //   },
  // });
  // console.log("Create user:", user);

  // const allUsers = await prisma.user.findMany({
  //   include: {
  //     notes: true,
  //   },
  // });
  // console.log("All users:", JSON.stringify(allUsers, null, 2));
  const user = await prisma.user.upsert({
    where: { userName: "Geek" },
    update: {},
    create: {
      name: "jhosue",
      lastName: "tipe",
      userName: "Geek",
      password: "Jhosue24",
    },
  });

  const note = await prisma.notes.create({
    data: {
      title: "Nota con tags",
      content: "Probando relación N:M",
      status: "InProgress",
      userId: user.id,
      tags: {
        create: [{ name: "prisma" }, { name: "backend" }],
      },
    },
    include: {
      tags: true,
    },
  });

  console.log("User:", user);
  console.log("note with tags:", note);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Error:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
