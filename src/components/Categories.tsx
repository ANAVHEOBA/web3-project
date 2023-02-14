import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Categories() {
  const categoryList = [
    {
      id: 1,
      image: "/Cardiologist.png",
      title: "Cardiologist",
      path: "",
    },
    {
      id: 2,
      image: "/Dentist.png",
      title: "Dentist",
      path: "",
    },
    {
      id: 3,
      image: "/neurology.png",
      title: "Neurology",
      path: "",
    },
    {
      id: 4,
      image: "/orthopedic.png",
      title: "Orthopedic",
      path: "",
    },
    {
      id: 5,
      image: "/Cardiologist.png",
      title: "Cardiologist",
      path: "",
    },
    {
      id: 6,
      image: "/Dentist.png",
      title: "Dentist",
      path: "",
    },
    {
      id: 7,
      image: "/neurology.png",
      title: "Neurology",
      path: "",
    },
    {
      id: 8,
      image: "/orthopedic.png",
      title: "Orthopedic",
      path: "",
    },
  ];
  return (
    <div className="py-10 flex flex-col space-y-3">
      <p className="text-center heading">Clinic and Specialities</p>
      <p className="text-center sub-heading">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, hic.
      </p>
      <div className="mx-28">
        <Swiper
          spaceBetween={50}
          slidesPerView={6}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {categoryList.map((categoryItem) => {
            return (
              <SwiperSlide key={categoryItem.id}>
                <div
                  key={categoryItem.id}
                  className="item-center text-center space-y-2 flex flex-col"
                >
                  <div
                    key={categoryItem.id}
                    className="p-8 shadow-light rounded-full items-center"
                  >
                    <div className="relative w-20 h-20">
                      <Image
                        src={categoryItem.image}
                        alt={categoryItem.title}
                        fill
                      />
                    </div>
                  </div>
                  <span>{categoryItem.title}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Categories;
