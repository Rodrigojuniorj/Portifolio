'use client'
import { CertificationsData, CertificationsDataProps } from '@/data/Certifications'
import Image from 'next/image';
import Link from 'next/link';
import { JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useState } from 'react'
import Slider, { Settings } from "react-slick";

export function Certifications() {
  const [certifications, setCertifications] = useState<CertificationsDataProps>(CertificationsData)

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0", // Remova o padding lateral para ter mais controle
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
    <div className='mt-10 w-full h-full'>
      <Slider {...settings}>
        {certifications.map(data => (
          <div key={data.id} className='max-w-md mx-auto'>
            <Link href={data.archive} target='_blank' className='flex justify-center items-center flex-wrap'>
              <Image src={data.picture} width={200} height={100} alt={data.name} />
              <p className='mt-4'>{data.name}</p>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
  
}