import { Certifications } from "@/components/Certifications";
import { Projects } from "@/components/Projects";
import { calculateAge } from "@/utils/years";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Contact } from "@/components/Contact";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <div>
      {/* Profile */}
      <section className="mt-10 grid sm:grid-cols-1 md:grid-cols-2">
        <div className="flex items-center flex-wrap">
          <div className="sm:w-full flex-1">
            <h3 className="text-2xl text-gray-100">Olá, eu sou</h3>
            <h2 className="font-bold text-4xl md:text-6xl mt-2 text-gray-100">Rodrigo Junior</h2>
            <p className="text-2xl mt-4">Desenvolvedor <span className="text-primary">Full Stack</span></p>
          </div>

          <div className="w-full flex flex-wrap align-bottom gap-6 mt-8 md:mt-0">
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
        <div className="hidden md:flex justify-center items-center">
          <Image src='https://github.com/Rodrigojuniorj.png' className="rounded-full" width={400} height={400} alt="foto de perfil github" />
        </div>
      </section>

      {/* About me */}
      <section id="Sobre" className="mt-40">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 items-end">
          <h1 className="text-center md:text-left text-5xl font-bold text-gray-100">Sobre mim</h1>
          <div className="hidden md:block h-1 rounded-md bg-primary" />
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 mt-10">
          <div className="text-xl leading-relaxed text-gray-200 flex gap-4 flex-wrap w-full pr-0 md:pr-20">
            <h3 className="text-2xl font-bold text-primary text-center w-full">Certicações</h3>
            <Certifications />
          </div>
          <div className="mt-16 md:mt-0 text-xl leading-relaxed text-gray-200 flex gap-4 flex-wrap">
            <p>
              Meu nome é Rodrigo Tavares Franco Junior, tenho {calculateAge('2002-02-17')} e sou formado
              em Sistemas de Informação pela UNIFIO (Centro Universitário das Faculdades Integradas de Ourinhos).
            </p>
            <p>
              Sou programador Full Stack com mais de 3 anos de experiência no mercado, atuando em projetos utilizando tecnologias como PHP, Java, ReactJS, React Native, MySQL e MongoDB. Mantenho-me atualizado com as tendências e ferramentas do mercado e aplico meu conhecimento para desenvolver soluções eficientes e escaláveis.
            </p>
            <div className="w-full flex justify-center mt-8">
              <Link className=" border-primary border-2 text-primary rounded-full py-2 px-4 duration-200 hover:bg-primary hover:text-gray-800" href="/archives/curriculo.pdf" target="_blank">Ver Currículo</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project */}
      <section id="Trabalhos" className="mt-40">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 items-end">
          <h1 className="text-center md:text-left text-5xl font-bold text-gray-100">Trabalhos</h1>
          <div className="hidden md:block h-1 rounded-md bg-primary" />
        </div>
        <Projects />
      </section>

      {/* Project */}
      <section id="Contato" className="mt-40">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 items-end">
          <h1 className="text-center md:text-left text-5xl font-bold text-gray-100">Contato</h1>
          <div className="hidden md:block h-1 rounded-md bg-primary" />
        </div>
        <div className="mt-20 text-xl leading-relaxed text-gray-200 flex gap-4 flex-wrap ">
          <div className="flex w-full flex-wrap justify-center items-center">
            <h1 className="w-full text-center text-primary text-4xl font-bold">
              Envie-me uma mensagem!
            </h1>
            <p className="w-full text-center mt-4">
              Tem uma pergunta, proposta ou apenas dizer olá? Vá em frente. 
            </p>
          </div>
          <Contact />
        </div>
      </section>
    </div>
  )
}
