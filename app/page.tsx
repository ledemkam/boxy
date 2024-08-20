"use client"
import copenhagen from "@/public/copenhagen.jpg";
import Image from "next/image";
import { Typewriter , Cursor} from "react-simple-typewriter";

export default function page() {
  return(
     <section className="w-full h-screen flex items-center justify-center flex-col gap-2">
       <Image
            src={copenhagen}
            alt="Copenhagen"
            width={50}
            height={50}
            className="w-12 h-12 mb-4 object-contain"
          />
          <h1 className="text-4xl md:text-6xl font-black mb-2 text-center uppercase flex items-center">
            <Typewriter typeSpeed={50} words={["Willkommen","Wellcome","Bienvenue","Добро пожаловать","歡迎"]}
             loop={0}/>
              <span>
                <Cursor />
              </span>
          </h1>
          <p className="my-2 text-center">Ein Abenteuer mit Digital folgen</p>
     
    </section>);
}
