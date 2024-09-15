import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default async function SettingsPage() {


 
  

  return (
    <section className="border border-gray-200 rounded-md p-3">

      <h2 className="text-3xl uppercase font-black">Settings</h2>
      <p className="text-lg text-muted-foreground">Ihre Profileinstellungen</p>
      <div className="w-12 h-[1px] bg-white my-2 mx-1"></div>

      <form >
        <input type="hidden" name="id" value="" />

        <Card>

          <CardHeader>
            <CardTitle>Globale Einstellungen</CardTitle>
            <CardDescription>Bearbeiten Sie Ihre Informationen und speichern Sie sie.</CardDescription>
          </CardHeader>

          <CardContent>
          {/* {user?.image && (
              <Image 
                src={user?.image} 
                alt={`${user?.name}`}
                className="w-16 h-16 object-contain mb-4" 
                width={100}
                height={100}
              />
            )} */}
            <div className="space-y-1 mb-2">
              <Label htmlFor="idUser">ID</Label>
              <Input disabled name="idUser" type="text" id="idUser" placeholder="Votre e-mail" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name">Nom</Label>
              <Input name="name" type="text" id="name" placeholder="Votre nom"  />
            </div>
            <div className="space-y-1 mt-2">
              <Label htmlFor="email">Email</Label>
              <Input disabled name="email" type="email" id="email" placeholder="Votre e-mail"  />
            </div>
          </CardContent>

          <CardFooter>
            <Button type="submit">Bearbeiten</Button>
          </CardFooter>
        </Card>

      </form>
      <form >
      <input type="hidden" name="id" />
        <Button className="bg-red-500 mx-1 my-2 hover:bg-red-600 text-white">Konten löschen</Button>
      </form>

    </section>
  );
}
