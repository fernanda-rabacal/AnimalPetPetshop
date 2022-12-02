import Slider from "react-slick"
import { useEffect, useRef, useState } from "react"
import { photosData } from "../../data/photosData"
import { ICarouselContainer, SlideItem } from "./styles"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FormerTitle } from "../tipography";
import { ArrowLeft, ArrowRight } from "phosphor-react";




export function InfinityCarousel(){
  const slider = useRef<Slider | null>(null)
  
  function RightButton() {
    return(
      <button onClick={() => slider!.current.slickNext()}>
        <div>
          <ArrowRight size={28} />
        </div>
      </button>
    )
  }

  function LeftButton() {
    return(
      <button onClick={() => slider!.current.slickPrev()}>
        <div>
          <ArrowLeft size={28} />
        </div>
      </button>
    )
  }

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    pauseOnHover: true,
    swipeToSlide: true,/* 
    nextArrow: <RightButton />,
    prevArrow: <LeftButton />, */
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
      slider!.current.slickNext()
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