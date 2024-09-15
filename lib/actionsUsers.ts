"use server"

import { getServerSession } from "next-auth"
import { authOptions } from "./AuthOptions"
import { redirect } from "next/navigation"
import prisma from "./db"


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

