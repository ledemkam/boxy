"use server"
import { redirect } from "next/navigation";
import prisma from "../db";
import { getUser } from "./actionsUsers"
import { revalidatePath } from "next/cache";


  export const getAllNotes = async (userId: string) => {
    const data = await prisma.notes.findMany({
      where: {
        userId: userId
      },
      orderBy:{
        createdAt: 'desc'

      }
    })
    return data
  }


export const createNoten = async(formData:FormData) => {
  const user = await getUser()
  const title = formData.get("title") as string;
  const beschreibung = formData.get("description") as string;
  const completed = formData.get("completed")
  const userId = user?.id as string
   await prisma.notes.create({
      data: {
        userId: userId,
        title: title,
        description: beschreibung,
        completed: completed === "on" ? true : false
      }
   })
   redirect("/dashboard/notes")
}

export const deleteNote = async(formData:FormData) => {
  const id = formData.get("id") as string
  await prisma.notes.delete({
    where: {
      id
    }
  })
  revalidatePath("/dashboard/notes")
}

export const getOneNote = async(id: string) => {
  const note = await prisma.notes.findUnique({
    where: {
      id:id
    }
  })
  return note
}