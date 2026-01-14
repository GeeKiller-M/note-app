import { prisma } from "../../lib/prisma";
import { Prisma } from "../../../generated/prisma/client";

export const createTag = async (data: Prisma.TagsCreateInput) => {
  return await prisma.tags.create({
    data: data,
  });
};

export const getAllTags = async () => {
  return await prisma.tags.findMany();
};

export const getTagById = async (id: number) => {
  return await prisma.tags.findUnique({
    where: { id },
  });
};

export const updateTag = async (id: number, data: Prisma.TagsUpdateInput) => {
  return await prisma.tags.update({
    where: { id },
    data: data,
  });
};
