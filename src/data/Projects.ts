export type ProjectsDataProps = {
  id: number
  picture: string
  name: string
  description: string
  position: string | null
  technology: {
    id: number
    name: string
  }[]
  start_date: Date
  end_date?: Date | null
  github?: string | null
  linkedin?: string | null
}[]

export const ProjectsData: ProjectsDataProps = [
  {
    id: 2,
    picture: '/pictures/kingpage.png',
    name: "King Page - Fábrica de software",
    position: "Programador de sistemas de informação",
    description: "Desenvolvedor Web Full Stack, encarregado de atualizar e implementar novas funcionalidades no sistema, que consiste em um painel de controle destinado a órgãos públicos.<br><br><br>",
    technology: [
      {
        id: 1,
        name: "PHP"
      },
      {
        id: 13,
        name: 'ZendFramework 2'
      },
      {
        id: 2,
        name: "HTML"
      },
      {
        id: 3,
        name: "CSS"
      },
      {
        id: 4,
        name: "JS"
      },
      {
        id: 11,
        name: "JQuery"
      },
      {
        id: 12,
        name: "MySQL"
      },
      {
        id: 14,
        name: 'Python'
      }
    ],
    start_date: new Date('2021-06-15'),
    end_date: null,
  },
  {
    id: 2,
    picture: '/pictures/brrp-site.png',
    name: "Brasil Roleplay - Freelance",
    position: null,
    description: "Esse site tem autenticação com o discord e integração com um chatbot, tem um painel administrativo dentre mais funções para o usuário.<br><br><br><br>",
    technology: [
      {
        id: 1,
        name: "PHP"
      },
      {
        id: 2,
        name: "HTML"
      },
      {
        id: 3,
        name: "CSS"
      },
      {
        id: 4,
        name: "JS"
      },
      {
        id: 5,
        name: "MongoDB"
      }
    ],
    start_date: new Date('2021-12-10'),
    end_date: new Date('2022-02-20'),
  },
  {
    id: 3,
    picture: '/pictures/turismo-bandeirantes.png',
    name: "Turismo Bandeirantes",
    position: null,
    description: "A solução tratava de um website e app mobile relacionado ao turismo de Bandeirantes-PR, com geolocalização dentre outros recursos como painel adminstrativo. </br></br> 🏆 1º FrontHackathon 2022",
    technology: [
      {
        id: 6,
        name: "React"
      },
      {
        id: 7,
        name: "React Native"
      },
      {
        id: 8,
        name: "Typescript"
      },
      {
        id: 9,
        name: "Node.js"
      },
      {
        id: 10,
        name: "Express"
      }
    ],
    start_date: new Date('2022-04-02'),
    end_date: new Date('2022-11-20'),
    github: 'https://github.com/Rodrigojuniorj/turismo-bandeirantes',
    linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:6981333667029626880?utm_source=share&utm_medium=member_desktop',
  }
];