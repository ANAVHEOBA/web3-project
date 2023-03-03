import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import DoctorCard from "./DoctorCard";

function BookDoctor() {
  interface doctorStruct {
    id: number;
    name: string;
    category: string;
    image: string;
    address: string;
    slotTime: string;
    chargeStart: number;
    chargeEnd: number;
  }
  const doctorList: doctorStruct[] = [
    {
      id: 1,
      name: "Deborah Angel",
      category: "MBBS, MD - General Medicine, DNB - Cardiology",
      image:
        "https://doccure.dreamguystech.com/react/template/9109ec39a7b4d06af126b0d5cec32273.jpg",
      address: "Georgia, USA",
      slotTime: "Available on Fri, 22 Mar",
      chargeStart: 100,
      chargeEnd: 300,
    },
    {
      id: 2,
      name: "Sofia Brient",
      category: "MBBS, MS - General Surgery, MCh - Urology",
      image:
        "https://doccure.dreamguystech.com/react/template/7058680646be673ef70f79e43f408408.jpg",
      address: "Louisiana, USA",
      slotTime: "Available on Fri, 22 Mar",
      chargeStart: 200,
      chargeEnd: 400,
    },
    {
      id: 3,
      name: "Ruby Perrin",
      category: "MDS - Periodontology and Oral Implantology, BDS",
      image:
        "https://doccure.dreamguystech.com/react/template/82a70aca5403c6ff499b0ac2a729e670.jpg",
      address: "Florida, USA",
      slotTime: "Available on Fri, 22 Mar",
      chargeStart: 300,
      chargeEnd: 1000,
    },
    {
      id: 4,
      name: "Darren Elder",
      category: "BDS, MDS - Oral & Maxillofacial Surgery",
      image:
        "https://doccure.dreamguystech.com/react/template/4c4edf4d3fc07e7acd8f249becdbcc04.jpg",
      address: "Newyork, USA",
      slotTime: "Available on Fri, 22 Mar",
      chargeStart: 50,
      chargeEnd: 300,
    },
  ];
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-y-4 px-5  md:px-10 py-10 md:py-20 bg-[#f9f9f9] dark:bg-[#030B29]">
      <div className="flex flex-col space-y-2">
        <h3 className="heading dark:text-primary-yellow">Book Our Doctor</h3>
        <p className="sub-heading dark:text-white">
          Our goal is to provide patients with high-quality medical care that is
          easily accessible and affordable.
        </p>
        <p className="text-[#272b41] dark:text-dark-muted">
          Welcome to our Doctor Online Consultation service on the Web3
          platform. Our service offers patients the convenience of connecting
          with licensed physicians from the comfort of their own home, without
          having to physically visit a doctor's office.
        </p>
        <p className="text-[#272b41] dark:text-dark-muted">
          Our platform utilizes the latest Web3 technology to provide a secure
          and decentralized platform for patients and doctors to communicate.
          This means that patient data is kept confidential and secure, and
          there is no risk of third-party interference.
        </p>
        <button className="bg-primary-blue text-white px-2 py-2 rounded-md dark:bg-primary-yellow dark:text-black">
          Read More...
        </button>
      </div>
      <div className="px-0 md:px-4">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={2}
          navigation
          breakpoints={{
            360: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
        >
          {doctorList.map((doctorItem) => {
            return (
              <SwiperSlide key={doctorItem.id}>
                <DoctorCard {...doctorItem} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default BookDoctor;
