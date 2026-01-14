import { prisma } from "../../lib/prisma";
import { Prisma } from "../../../generated/prisma/client";

export const createUser = async (data: Prisma.UserCreateInput) => {
  return await prisma.user.create({
    data: data,
  });
};

export const getAllUsers = async () => {
  return await prisma.user.findMany();
};

export const getUserById = async (id: number) => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

export const updateUser = async (id: number, data: Prisma.UserUpdateInput) => {
  return await prisma.user.update({
    where: { id },
    data: data,
  });
};

export const deleteUser = async (id: number) => {
  return await prisma.user.delete({
    where: { id },
  });
};
