import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Footer(){
  return (
    <footer className="text-center pt-32 pb-10">
      <div className="w-full flex align-bottom gap-6 justify-center items-center">
        <Link className="flex items-center text-center gap-2 text-gray-300 hover:scale-105 hover:text-primary duration-200" target="_blank" href='https://www.linkedin.com/in/rodrigo-tavares-franco-junior-3a0059192/'>
          <FaLinkedin size={36} />
        </Link>
        <Link className="flex items-center text-center gap-2 text-gray-300 hover:scale-105 hover:text-primary duration-200" target="_blank" href='https://github.com/Rodrigojuniorj'>
          <FaGithub size={36} />
        </Link>
        <Link className="flex items-center text-center gap-2 text-gray-300 hover:scale-105 hover:text-primary duration-200" href='mailto:rodrigotavaresfranco@gmail.com'>
          <MdEmail size={36} />
        </Link>
      </div>
      <p className="text-lg mt-8">&copy; {new Date().getFullYear()} - Rodrigo Tavares Franco Junior </p>
    </footer>
  )
}