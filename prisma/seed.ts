import { PrismaClient } from "../lib/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // Clear existing data (optional for testing)
  await prisma.user.deleteMany();
  await prisma.doctor.deleteMany();
  await prisma.patient.deleteMany();
  await prisma.staff.deleteMany();

  // Create Admin
  const admin = await prisma.user.create({
    data: {
      name: "Admin User",
      email: "admin@vitamedica.com",
      password: "admin123",
      role: "ADMIN",
    },
  });

  // Create Doctor
  const doctorUser = await prisma.user.create({
    data: {
      name: "Dr. Meera Singh",
      email: "meera@vitamedica.com",
      password: "doctor123",
      role: "DOCTOR",
      doctor: {
        create: {
          specialization: "Cardiology",
          experience: 8,
          phone: "9998877766",
        },
      },
    },
    include: { doctor: true },
  });

  // Create Patient
  const patientUser = await prisma.user.create({
    data: {
      name: "Ravi Kumar",
      email: "ravi@vitamedica.com",
      password: "patient123",
      role: "PATIENT",
      patient: {
        create: {
          age: 32,
          gender: "Male",
          medicalRecord: "BP under control",
          doctor: {
            connect: { id: doctorUser.doctor!.id },
          },
        },
      },
    },
  });

  // Create Staff
  const staffUser = await prisma.user.create({
    data: {
      name: "Pooja Patel",
      email: "pooja@vitamedica.com",
      password: "staff123",
      role: "STAFF",
      staff: {
        create: {
          position: "Receptionist",
          phone: "9876543210",
        },
      },
    },
  });

  console.log({ admin, doctorUser, patientUser, staffUser });
}

main()
  .then(() => console.log("🌱 Database seeded successfully"))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

  