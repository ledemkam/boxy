"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getUser, updateUser } from "@/lib/actionsUsers";
import { toast } from "react-toastify";


export default async function SettingsPage() {

    const user = await getUser();

    const handleSubmit = () => {
       toast.success("konto wurde erfolgreich bearbeitet")
    }
 
  

  return (
    <section className="border border-gray-200 rounded-md p-3">

      <h2 className="text-3xl uppercase font-black">Settings</h2>
      <p className="text-lg text-muted-foreground">Ihre Profileinstellungen</p>
      <div className="w-12 h-[1px] bg-white my-2 mx-1"></div>

      <form action={updateUser} onSubmit={handleSubmit}>
        <input type="hidden" name="id" value={user?.id} />

        <Card>

          <CardHeader>
            <CardTitle>Globale Einstellungen</CardTitle>
            <CardDescription>Bearbeiten Sie Ihre Informationen und speichern Sie sie.</CardDescription>
          </CardHeader>

          <CardContent>
           {user?.image && (
              <Image 
                src={user?.image} 
                alt={`${user?.name}`}
                className="w-16 h-16 object-contain mb-4 rounded-full" 
                width={100}
                height={100}
              />
            )}
            <div className="space-y-1 mb-2">
              <Label htmlFor="idUser">ID</Label>
              <Input disabled name="idUser" type="text" id="idUser" placeholder="Ihr ID" defaultValue={user?.id || ""} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input name="name" type="text" id="name" placeholder="Ihr Name"  defaultValue={user?.name || ""} />
            </div>
            <div className="space-y-1 mt-2">
              <Label htmlFor="email">Email Adresse</Label>
              <Input disabled name="email" type="email" id="email" placeholder="Ihr Email" defaultValue={user?.email || ""}  />
            </div>
          </CardContent>

          <CardFooter>
            <Button type="submit">Bearbeiten</Button>
          </CardFooter>
        </Card>

      </form>
      <form >
      <input type="hidden" name="id" />
        <Button className="bg-red-500 mx-1 my-2 hover:bg-red-600 text-white">Konto löschen</Button>
      </form>

    </section>
  );
}
