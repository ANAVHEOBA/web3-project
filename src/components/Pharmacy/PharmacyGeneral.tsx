import Image from "next/image";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { HiLocationMarker } from "react-icons/hi";
import { useRouter } from "next/router";

function PharmacyGeneral() {
  const router = useRouter();
  const { pharmacyId } = router.query;
  return (
    <div className="flex flex-col md:flex-row space-y-3 justify-between px-5 py-5 border border-[#f0f0f0] rounded-lg dark:border-dark-input-border dark:bg-dark-card">
      {/* Left Side Profile general */}
      <div className="flex flex-col md:flex-row space-x-2 mx-auto md:mx-0">
        <div className="relative h-48 w-48">
          <Image
            src={
              "https://doccure.dreamguystech.com/react/template/fadc24e896c2cd4e740a7d4fc897a795.jpg"
            }
            alt={"Nayan"}
            fill
          />
        </div>
        <div className="space-y-2">
          <h5 className="text-lg font-medium text-[#272b41] dark:text-white dark:hover:text-primary-yellow">
            Medlife Medical
          </h5>
          <div className="flex space-x-2 items-center dark:text-dark-muted">
            <FiPhoneCall className="h-6 w-6" />
            <span>320-795-8815</span>
          </div>
          <div className="flex space-x-2 items-center">
            <HiLocationMarker className="h-6 w-6" />
            <span>96 Red Hawk Road Cyrus, MN 56323</span>
          </div>
          <div className="flex space-x-2 items-center">
            <AiOutlineRight className="h-6 w-6" />
            <span>Chemists, Surgical Equipment Dealer</span>
          </div>
          <div className="flex space-x-2 items-center">
            <AiOutlineRight className="h-6 w-6" />
            <span>Opens at 08.00 AM</span>
          </div>
        </div>
      </div>

      {/* Right Feedback, Appointment */}
      <div className="space-y-2 items-center mx-auto md:mx-0 flex flex-col">
      <button className="px-8 py-2 border-2 w-56 border-primary-blue text-primary-blue rounded-lg hover:bg-primary-blue hover:text-white transition transform ease-out duration-300 dark:border-primary-yellow dark:text-white dark:hover:bg-primary-yellow dark:hover:text-black">Send Message</button>
      <button className="px-8 py-2 border-2 w-56 border-primary-blue rounded-lg hover:bg-white hover:text-primary-blue transition transform ease-out duration-300 bg-primary-blue text-white dark:bg-primary-yellow dark:text-black dark:border-none">Call Now</button>
      </div>
    </div>
  );
}

export default PharmacyGeneral;
