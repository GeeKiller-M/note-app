import { prisma } from "../../lib/prisma";
import { Prisma } from "../../../generated/prisma/client";

export const createNote = async (data: Prisma.NotesUncheckedCreateInput) => {
  return await prisma.notes.create({
    data: data,
  });
};

export const getAllNotes = async () => {
  return await prisma.notes.findMany({
    include: {
      user: {
        select: {
          userName: true,
        },
      },
      tags: {
        select: {
          name: true,
        },
      },
    },
  });
};

export const getNoteById = async (id: number) => {
  return await prisma.notes.findUnique({
    where: { id },
    include: {
      user: {
        select: {
          userName: true,
        },
      },
      tags: {
        select: {
          name: true,
        },
      },
    },
  });
};

export const updateNote = async (
  id: number,
  data: Prisma.NotesUncheckedUpdateInput
) => {
  return await prisma.notes.update({
    where: { id },
    data: data,
  });
};

export const deleteNote = async (id: number) => {
  return await prisma.notes.delete({
    where: { id },
  });
};
