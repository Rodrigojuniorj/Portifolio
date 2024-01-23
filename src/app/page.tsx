import { Projects } from "@/components/Projects";
import { calculateAge } from "@/utils/years";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <>
      {/* Profile */}
      <section className="mt-10 grid grid-cols-2">
        <div className="flex items-center flex-wrap">
          <div className="flex-1">
            <h3 className="text-2xl text-gray-100">Olá, eu sou</h3>
            <h2 className="font-bold text-6xl mt-2 text-gray-100">Rodrigo Junior</h2>
            <p className="text-2xl mt-4">Desenvolvedor <span className="text-primary">Full Stack</span></p>
          </div>

          <div className="w-full flex align-bottom gap-6">
            <Link className="flex items-center text-center gap-2 text-gray-300 hover:scale-105 hover:text-primary duration-200" target="_blank" href='https://www.linkedin.com/in/rodrigo-tavares-franco-junior-3a0059192/'>
              <FaLinkedin size={22} />
              LinkedIn
            </Link>
            <Link className="flex items-center text-center gap-2 text-gray-300 hover:scale-105 hover:text-primary duration-200" target="_blank" href='https://github.com/Rodrigojuniorj'>
              <FaGithub size={22} />
              Github
            </Link>
            <Link className="flex items-center text-center gap-2 text-gray-300 hover:scale-105 hover:text-primary duration-200" href='mailto:rodrigotavaresfranco@gmail.com'>
              <MdEmail size={22} />
              E-mail
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image src='https://github.com/Rodrigojuniorj.png' className="rounded-full" width={300} height={300} alt="foto de perfil github" />
        </div>
      </section>

      {/* About me */}
      <section className="mt-40">
        <div className="grid grid-cols-2 items-end">
          <h1 className="text-5xl font-bold text-gray-100">Sobre mim</h1>
          <div className="h-1 rounded-md bg-primary" />
        </div>
        <div className="grid grid-cols-2 mt-10">
          <div></div>
          <div className="text-xl leading-relaxed text-gray-200 flex gap-4 flex-wrap">
            <p>
              Meu nome é Rodrigo Tavares Franco Junior, tenho {calculateAge('2002-02-17')} e sou formado
              em Sistemas de Informação pela UNIFIO (Centro Universitário das Faculdades Integradas de Ourinhos).
            </p>
            <p>
              Sou programador Full Stack com mais de 3 anos de experiência no mercado, atuando em projetos utilizando tecnologias como PHP, Java, ReactJS, React Native, MySQL e MongoDB. Mantenho-me atualizado com as tendências e ferramentas do mercado e aplico meu conhecimento para desenvolver soluções eficientes e escaláveis.
            </p>
          </div>
        </div>
      </section>

      {/* Project */}
      <section className="mt-40">
        <div className="grid grid-cols-2 items-end">
          <h1 className="text-5xl font-bold text-gray-100">Projetos</h1>
          <div className="h-1 rounded-md bg-primary" />
        </div>
        <Projects />
      </section>
    </>
  )
}
