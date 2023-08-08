"use client";
import Image from "next/image"
import { useState } from 'react'
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa6";
import { FaRegCircleDot } from "react-icons/fa6";

export function Carousel() {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1153&q=80'
    },
    {
      url: 'https://plus.unsplash.com/premium_photo-1687960117069-567a456fe5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <div className="max-w-[1440px] h-[450px] w-full m-auto py-4 relative group">
      <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="h-96 w-full rounded-2 bg-center bg-cover duration-500">
        <div className="hidden group-hover:block absolute top-[35%] -translate-x-0 translate-y-[35%] left-5 text-2xl rounded-full p-2 bg-white/20 text-white cursor-pointer">
          <FaCircleChevronLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[35%] -translate-x-0 translate-y-[35%] right-5 text-2xl rounded-full p-2 bg-white/20 text-white cursor-pointer">
          <FaCircleChevronRight onClick={nextSlide} size={30} />
        </div>        
      </div>
      <div className="flex top-4 justify-center py-2">
          {
            slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer">  
                {
                    slideIndex === currentIndex ? <FaRegCircleDot className="text-black mx-1 w-2"/> : <FaRegCircle className="text-black/20 mx-1 w-2"/>
                    
                }                                
              </div>
            ))
          }
        </div>
    </div>
  )
}