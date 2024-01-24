"use client"
import Image from "next/image";

import { ProjectsData, ProjectsDataProps } from '@/data/Projects'
import { JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useState } from "react";
import { convertData } from "@/utils/ConvertData";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export function Projects() {
  const [projects, setProjects] = useState<ProjectsDataProps>(ProjectsData)
  const [currentSlide, setCurrentSlide] = useState(0);

   const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    appendDots: (dots: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined) => (
      <div style={{ marginTop: "0px" }}>
        <ul style={{ margin: "-10px", padding: "0px", textAlign: "center" }}> {dots} </ul>
      </div>
    ),
    customPaging: (index) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: index === currentSlide ? "#33FFA9" : "#ddd",
        }}
      ></div>
    ),
  };
  

  return (
    <div className="mt-10">
      <Slider {...settings}>
        {
          projects.map((data) => {
            return (
              <div className="max-w-md rounded overflow-hidden border border-gray-700" key={data.id}>
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
                          <div key={tec.id} className="z-50 select-none scroll-snap-align-start inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 flex-none">
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
        </Slider>
    </div>
  )
}