import { Button } from "@/components/ui/button";
import Link from "next/link"

import { File } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { FilePenLine } from 'lucide-react';
import { getUser } from "@/lib/action/actionsUsers";
import { getAllNotes } from "@/lib/action/actionsNoten";
import DeleteButton from "@/components/layout/DeleteButton";

export default async function DashboardPage() {

  const user = await getUser()
  const data = await getAllNotes(user?.id as string)


  return (
    <section className="grid items-start gap-y-8">
        <div className="flex md:items-center md:justify-between flex-col md:flex-row px-2">
          <div className="grid gap-1">
            <h2 className="text-3xl uppercase font-black">Notizen</h2>
            <p className="text-lg text-muted-foreground">Verlieren Sie nicht Ihre Ideen und erstellen Sie eine Notiz</p>
            <div className="w-12 h-[1px] bg-white my-2 mx-1"></div>
          </div>
        <Button asChild>
          <Link href="/dashboard/notes/create">Notiz erstellen</Link>
        </Button>
        </div>
       {data.length < 1 ?(
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-3 animate-in fade-in-50">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-orange-500 bg-opacity-20 mb-4">
            <File className="text-orange-900"/>
            </div>
            <p className="text-lg text-white">Sie haben keine Notiz</p>
            <p className="text-muted-foreground text-sm">Beginnen Sie jetzt mit der Erstellung von Notizen über unsere App</p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white mt-4">
              <Link href="/dashboard/notes/create">neue Notiz erstellen</Link>
            </Button>
          </div>
        ): (
          <div className="flex flex-col space-y-4">
            {data?.map((item,index) => (
            <Card key={index} className="flex justify-between items-center p-4">
              <div>
                <h2  className="text-orange-500 text-xl font-bold">{item.title}</h2>
                <p className="text-sm text-muted-foreground">
                  écrit le {new Intl.DateTimeFormat("de-DE", {
                    dateStyle: "full"
                  }).format(new Date(item.createdAt))}
                </p>
                </div>  
               <div className=" flex items-center gap-3 ">
               <Button type="button" className="bg-yellow-500 hover:bg-yellow-600 mt-4 text-white mb-3">
                  <Link href={`notes/note/${item.id}`}><FilePenLine className='w-4 h-4' /></Link>
                  </Button> 
                  <DeleteButton id={item.id}/>   
              </div>
              
            </Card>
          ))}
          </div>
        )} 
    </section>
  );
}