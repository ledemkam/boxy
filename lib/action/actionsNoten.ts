"use server"
import { redirect } from "next/navigation";
import prisma from "../db";
import { getUser } from "./actionsUsers"


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