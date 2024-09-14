"use client"
import { Chrome, Github } from "lucide-react";
import { Button } from "../ui/button";
import {signIn} from "next-auth/react";

export default function ButtonsProvider() {
  return (
    <div className="flex flex-col space-y-4">
      <Button onClick={()=> signIn("google")}> Weiter mit Google  <Chrome/></Button>
      <Button onClick={()=> signIn("github")}> Weiter mit GitHub  <Github/></Button>
    </div>
  )
}