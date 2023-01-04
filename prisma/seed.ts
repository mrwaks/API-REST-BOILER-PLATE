'use strict';

// Npm Modules
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const prisma = new PrismaClient();

const adminPassword = <string>process.env.PRISMA_SEED_ADMIN_PASSWORD;

const createAdmin = async () => {
  console.log('Start seeding...');
  await prisma.user.create({
    data: {
      username: 'mrwaks',
      password: await bcrypt.hash(adminPassword, 10),
      role: 'ADMIN',
    },
  });
  console.log('Seeding finished');
};

createAdmin()
  .catch((error) => {
    console.log(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
  