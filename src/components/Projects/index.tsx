"use client"
import Image from "next/image";

import { ProjectsData, ProjectsDataProps } from '@/data/Projects'
import { useState } from "react";
import { convertData } from "@/utils/ConvertData";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Projects() {
  const [projects, setProjects] = useState<ProjectsDataProps>(ProjectsData)

  return (
    <div className="mt-10 grid grid-cols-3 gap-3">
      {
        projects.map((data) => {
          return (
            <div className="max-w-md rounded overflow-hidden shadow-lg border border-gray-700" key={data.id}>
              <div className="w-full h-48 relative">
                <Image className="h-full w-full" objectFit="cover" width={330} height={192} src={data.picture} alt="Sunset in the mountains" />
                {
                  data.github || data.linkedin ? (
                    <div className="flex gap-2 items-center justify-end absolute right-0 bottom-0 z-20 bg-gray-700 w-auto py-2 pl-4 pr-1 rounded-t">
                      {data.github && (
                        <Link
                          className="w-10 flex items-center text-center text-gray-300 hover:scale-105 hover:text-primary duration-200" target="_blank" href={`${data.github}`}
                        >
                          <FaGithub className="" size={26} />
                        </Link>
                      )}
                       {data.linkedin && (
                        <Link
                          className="w-10 flex items-center text-center text-gray-300 hover:scale-105 hover:text-primary duration-200" target="_blank" href={`${data.linkedin}`}
                        >
                          <FaLinkedin className="" size={26} />
                        </Link>
                      )}
                    </div>
                  ): (
                    <></>
                  )
                }
              </div>
              <div className="px-4 h-full">
                <div className="font-bold text-xl mt-4 text-primary">{data.name}</div>
                <p className="font-normal leading-relaxed text-sm text-gray-400">
                  {convertData(data.start_date)} até {data.end_date ? convertData(data.end_date) : ' o momento'}
                </p>
                <div className="flex flex-wrap">
                  <div className="py-4">
                    <p className="text-text text-md leading-relaxed" dangerouslySetInnerHTML={{ __html: data.description }} />
                  </div>
                  <div className="mt-2 mb-10 pb-2 pt-4 flex overflow-x-scroll snap-type-mandatory">
                    {
                      data.technology.map((tec) => (
                        <div key={tec.id} className="select-none scroll-snap-align-start inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 flex-none">
                          {tec.name}
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}