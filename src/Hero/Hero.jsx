import React from "react";
import Slider from "react-slick";
import newheadphone from '../assets/newheadphone.png';
import newvrheadset from '../assets/newvrheadset.png';
import smartwatch from '../assets/smart-watch.webp';
const HeroData = [

  {
    id: 1,
    img: newheadphone,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
    description: "",
  },
  {
    id: 2,
    img: newvrheadset,
    subtitle: "Vision real",
    title: "Realistics",
    title2: "VR-Headsets",
    description: "",
  },
  {
    id: 3,
    img: smartwatch,
    subtitle: "Make up Smart",
    title: "Smart",
    title2: "Smart-Watch",
    description: "",
  }
];

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,

    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (

    <div className="container">
      <div className="overflow-hidden pt-2  pb-2 rounded-3xl min-h-[350px]
        sm:min-h-[350px] hero-bg-color
        flex justify-center items-center">


        {/* hero section */}


        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {HeroData.map((data, index) => (
              <div key={index}>


                {/* text content */}


                <div className="grid grid-cols-1 sm:grid-cols-2">

                  <div className="flex flex-col justify-center
                    gap-4 sm:pl-3 pt-12 sm:pt-0 text-center 
                    sm:text-left order-2 sm:order-1 relative z-10">

                    <h1 className="text-2xl sm:text-6xl lg:text-2xl 
                      font-bold">
                      {data.subtitle}
                    </h1>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl 
                      font-bold">
                      {data.title}
                    </h1>
                    <h1 className="text-4xl sm:text-8xl text-white uppercase lg:text-8xl 
                      font-bold">
                      {data.title2}
                    </h1>

                    <div className="bg-red-500
                      cursor-pointer w-[200px] p-1 text-center rounded-2xl text-white">

                      <button >Shop Now</button>
                    </div>

                  </div>

                  {/* image section */}


                  <div className="order-1 sm:order-2">

                    <div>
                      <img src={data.img} alt=""
                        className="w-[300px] h-[300px] 
                        sm:w-[450px]  sm:h-[450px] pt-4
                    sm:scale-105 lg:scale-120 
                    object-contain mx-auto 
                    drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] 
                    relative z-40"/>

                    </div>
                  </div>

                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>

  );
}
