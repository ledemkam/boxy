import copenhagen from "@/public/copenhagen.jpg";
import Image from "next/image";
import Link from "next/link";
import { ThemeToogle } from "../theme/ThemeToogle";

export default function Nav() {
  return (
    <nav className="max-w-[1200px] w-full mx-auto h-[80px] flex items-center justify-between p-5 border-b border-gray-300">
      <div>
        <Link href="/">
          <Image
            src={copenhagen}
            alt="Copenhagen"
            width={50}
            height={50}
            className="w-12 h-12"
          />
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <ThemeToogle />
      </div>
    </nav>
  );
}
