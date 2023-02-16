import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import LongDoctorCard from "./LongDoctorCard";

function Doctors() {
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
    <div>
      <Breadcrumb />
      <div className="mx-5 my-3 space-y-3">
        {
            doctorList.map((doctorData) => {
                return <LongDoctorCard key={doctorData.id} {...doctorData}  />
            })
        }
      </div>
    </div>
  );
}

export default Doctors;
