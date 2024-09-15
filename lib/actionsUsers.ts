"use server"

import { getServerSession } from "next-auth"
import { authOptions } from "./AuthOptions"
import { redirect } from "next/navigation"
import prisma from "./db"
import { revalidatePath } from "next/cache"


export const getUser = async() => {
    const session = await getServerSession(authOptions)
    if(!session || !session.user || !session.user.id){
      redirect("../")
    }
    const id = session.user.id as string
    const user = await prisma.user.findUnique({
      where: {id}
    })
    return user
}

export const updateUser = async(FormData: FormData) => {
  try {
    const userName =  FormData.get("name") as string
    const id = FormData.get("id") as string

    if(userName !== null){
      await prisma.user.update({
        where: {id},
        data: {name: userName}
      })
    }
  } catch (error) {
     console.error("Beim Ändern des Benutzers ist ein Fehler aufgetreten",error)
  }finally{
       revalidatePath("/")

  }
}

