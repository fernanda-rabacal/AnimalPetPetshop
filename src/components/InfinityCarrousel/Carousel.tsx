import Slider from "react-slick"
import { CSSProperties, HTMLAttributes, useEffect, useRef, useState } from "react"
import { photosData } from "../../data/photosData"
import { ICarouselContainer, SlideItem } from "./styles"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FormerTitle } from "../tipography";
import { ArrowLeft, ArrowRight, CaretLeft, CaretRight } from "phosphor-react";


export function InfinityCarousel(){
  const slider = useRef<Slider | null>(null)
  
  function RightButton({ className, onClick, style} : HTMLAttributes<HTMLButtonElement>) {
    return(
      <button className={`${className} arrow-button`} style={{...style,  marginRight: "1rem"}} onClick={onClick}>
        <div >
          <CaretRight size={20} weight="bold" />
        </div>
      </button>
    )
  }

  function LeftButton({ className, style, onClick } : HTMLAttributes<HTMLButtonElement>) {
    return(
      <button className={`${className} arrow-button`} style={{...style, marginLeft: "1rem"}} onClick={onClick}>
        <div>
          <CaretLeft size={20} weight="bold" />
        </div>
      </button>
    )
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    pauseOnHover: true,
    swipeToSlide: true,
    nextArrow: <RightButton />,
    prevArrow: <LeftButton />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      slider?.current?.slickNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return(
    <ICarouselContainer className="container">
      <FormerTitle>Nossos clientes pets maravilhosos</FormerTitle>
      <div>
        <Slider ref={slider} {...settings}>
          {photosData.map(photo => {
            return(
              <SlideItem>
                <img src={`/instagramPics/${photo.src}`} />
              </SlideItem>
            )
          })}
        </Slider>
      </div>
    </ICarouselContainer>
  )
}