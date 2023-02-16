import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import PharmacyCard from "./PharmacyCard";

function Pharmacy() {
  interface pharmacyStruct {
    id: number;
    image: string;
    phone: string;
    address: string;
    dealer: string;
    name: string;
    openTime: string;
  }
  const pharmacyList: pharmacyStruct[] = [
    {
      id: 1,
      image: "https://doccure.dreamguystech.com/react/template/fadc24e896c2cd4e740a7d4fc897a795.jpg",
      phone: "320-795-8815",
      address: "96 Red Hawk Road Cyrus, MN 56323",
      dealer: "Chemists, Surgical Equipment Dealer",
      name: "Medlife Medical",
      openTime: "08.00 AM",
    },
    {
      id: 2,
      image: "https://doccure.dreamguystech.com/react/template/5bced1551ff1b65ee32a43aa94be3848.jpg",
      phone: "913-631-2538",
      address: " 3830 Poe Lane Kansas City, KS 66216",
      dealer: "Chemists, Surgical Equipment Dealer",
      name: "PharmaMed Medical",
      openTime: "08.00 AM",
    },
    {
      id: 3,
      image: "https://doccure.dreamguystech.com/react/template/900acb527850e0374f71c347391a4114.jpg",
      phone: "816-270-2336",
      address: "3849 Nutter Street Ferrelview, MO 64163",
      dealer: "Chemists, Surgical Equipment Dealer",
      name: "The Pill Club Medical",
      openTime: "",
    },
  ];
  return (
    <div>
      <Breadcrumb />
      <div className="mx-5">
        <div className="space-y-5 my-5">
          {pharmacyList.map((pharmacyData) => {
            return <PharmacyCard key={pharmacyData.id} {...pharmacyData} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Pharmacy;
