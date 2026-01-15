import { prisma } from "../../lib/prisma";
import { Prisma } from "../../../generated/prisma/client";

export interface NoteFilters {
  userId: number;
  status?: "Pending" | "InProgress" | "Completed" | undefined;
  tagName?: string | undefined;
  search?: string | undefined;
  page?: number | undefined;
  limit?: number | undefined;
}

export const createNote = async (data: Prisma.NotesUncheckedCreateInput) => {
  return await prisma.notes.create({
    data: data,
  });
};

export const getAllNotes = async (filters: NoteFilters) => {
  const { userId, status, tagName, search } = filters;
  const limit = Number(filters.limit) || 10;
  const page = Number(filters.page) || 1;
  const skip = (page - 1) * limit;
  const take = limit;

  const where: Prisma.NotesWhereInput = {
    userId: userId,
  };

  if (status) where.status = status;
  if (tagName) {
    where.tags = {
      some: {
        name: tagName,
      },
    };
  }

  if (search) {
    where.OR = [
      { title: { contains: search } },
      { content: { contains: search } },
      { tags: { some: { name: { contains: search } } } },
    ];
  }

  return await prisma.notes.findMany({
    where,
    skip: skip,
    take: take,
    include: {
      user: { select: { userName: true } },
      tags: { select: { name: true } },
    },
    orderBy: {
      createdAt: "desc",
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
