"use client"
import { Button } from "@/components/ui/button";
import { Trash2 } from 'lucide-react';
import { Input } from "../ui/input";
import { deleteNote } from "@/lib/action/actionsNoten";
import { toast } from "react-toastify";


type DeleteButtonProps = {
  id: string; 
}

const handleSubmit = () => {
  toast.success("die Notiz wurde erfolgreich gelöscht")
}

export default function DeleteButton({ id }: DeleteButtonProps) {
  return (
    <form action={deleteNote} onClick={handleSubmit}>
      <Input type="hidden" name="id" value={id} />
      <Button type="submit" className="text-white bg-red-500 hover:bg-red-600"
      
      >    <Trash2 className='w-4 h-4' />
</Button>

    </form>
  );
}