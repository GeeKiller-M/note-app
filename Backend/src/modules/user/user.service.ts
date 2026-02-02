import { prisma } from "../../lib/prisma";
import { Prisma } from "../../../generated/prisma/client";

export const createUser = async (data: Prisma.UserCreateInput) => {
  return await prisma.user.create({
    data,
    select: {
      id: true,
      name: true,
      lastName: true,
      userName: true,
    }
  });
};

export const getAllUsers = async () => {
  return await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      lastName: true,
      userName: true,
    }
  });
};

export const getUserById = async (id: number) => {
  return await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      lastName: true,
      userName: true,
    }
  });
};

export const updateUser = async (id: number, data: Prisma.UserUpdateInput) => {
  return await prisma.user.update({
    where: { id },
    data,
    select: {
      id: true,
      name: true,
      lastName: true,
      userName: true,
    }
  });
};

export const deleteUser = async (id: number) => {
  return await prisma.user.delete({
    where: { id },
  });
};
