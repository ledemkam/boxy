
import {Button} from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";


import Image from "next/image"
import BadgePremium from "@/public/badge-premium.svg"




export default async function PaiementPage() {
 

  const itemsPremium = [
    {name: "Farbgenerator"},
    {name: "Passwortgenerator"},
    {name: "QR-Code-Generator"},
    {name: "Bildkompressor"},
  ]

  





  return (
    <div className="max-w-lg mx-auto space-y-4 mt-3">
      <Card className="flex-flex-col ">
        <CardContent className="py-8">
          <div>
            <h3 className="text-md font-black uppercase bg-orange-900 bg-opacity-20 text-orange-500 p-3 rounded-md inline">Pass Premium</h3>
          </div>
          <div className="mt-4 text-6xl font-black ">
            <span>25.00€</span> <span className="text-sm text-muted-foreground">/ monatlich</span>
          </div>
          <p className="mt-4 text-muted-foreground">Entdecken Sie mit unserem Premium-Pass die exklusiven Freuden der Premium-Webentwicklung und genießen Sie ein einzigartiges Erlebnis!</p>
          <div className="flex-1 flex flex-col justify-between px6 py-6 bg-secondary rounded-lg m-1 space-t-6 p-3 mt-4">
            <ul className="space-y-3">
              {itemsPremium.map((item, index)=> (
                <li key={index} className="flex items-center gap-2 text-muted-foreground">
                  <span>✅</span>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
            <form className="w-full mt-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full" type="submit">Werden Sie Premium-Mitglied</Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}