import {Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter} from "@/components/ui/card"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { getOneNote, updateNote } from "@/lib/action/actionsNoten";

interface Params {
  id: string ;
  title: string;
  description: string;
  completed: boolean;
}

interface UpdatePageProps {
  params: Params;
}

export default async function CreatePage({ params }: UpdatePageProps) {

  const note = await getOneNote(params.id)



  return (
    <Card>
      <form action={updateNote}>
        <Input type="hidden" name="id" id="id" defaultValue={note?.id as string}/>
        <CardHeader>
          <CardTitle>Neue Notiz</CardTitle>
          <CardDescription>Vergessen Sie nicht etwas zu notieren</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-5">
          <div className="gap-y-2 flex flex-col">
            <Label htmlFor="title">Titel</Label>
            <Input defaultValue={note?.title as string} placeholder="Titre de votre note"  type="text" name="title" id="title"/>
          </div>
          <div className="gap-y-2 flex flex-col">
            <Label htmlFor="description">Beschreibung</Label>
            <Textarea defaultValue={note?.description as string}  placeholder="Beschreibung der Noten"  name="description" id="description"/>
          </div>

          <div className="gap-y-2 flex flex-col">
            <Label htmlFor="completed">Warten | Vollständig</Label>
            <Input  className="w-6 cursor-pointer accent-orange-500"  type="checkbox" name="completed" id="completed" defaultChecked={note?.completed as boolean}/>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <Button className="bg-red-500 mx-1 my-2 hover:bg-red-600 text-white" type="button">
            <Link href="/dashboard/notes">Stornieren</Link>
          </Button>
          <Button className="bg-orange-500 mx-1 my-2 hover:bg-orange-600 text-white" type="submit">Notiz Bearbeiten</Button>
        </CardFooter>
      </form>

    </Card>
  )


}