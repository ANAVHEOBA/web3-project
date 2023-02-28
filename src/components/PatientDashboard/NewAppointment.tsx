import shortAddress from "@/utils/shortAddress";
import { type } from "os";
import React, { useState } from "react";
import CreateAppointmentModal from "./CreateAppointmentModal";

type props = {
  doctorList: any;
  // patientId: any;
};

const NewAppointment: React.FC<props> = ({ doctorList }) => {
  const doctorList1 = [
    {
      id: 1,
      name: "Mayan Radadiya",
      specialization: "Heart, nose eye special",
      consultFee: 5,
      walletAddress: "0x78...7c4",
    },
    {
      id: 2,
      name: "Mayan Radadiya",
      specialization: "Heart, nose eye special",
      consultFee: 5,
      walletAddress: "0x78...7c4",
    },
    {
      id: 3,
      name: "Mayan Radadiya",
      specialization: "Heart, nose eye special",
      consultFee: 5,
      walletAddress: "0x78...7c4",
    },
  ];
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  return (
    <div className="px-4 py-4 border border-[#f0f0f0] rounded flex flex-col dark:border-dark-input-border dark:bg-dark-card">
      <h4 className="heading dark:text-primary-yellow">
        Create New Appointment
      </h4>
      <table className="mt-8 w-full">
        <thead>
          <tr className="text-left border-b border-[#f0f0f0] dark:border-dark-input-border dark:text-white">
            <th className="text-left">Id</th>
            <th>Name</th>
            <th>Specialization</th>
            <th>Consult Fee</th>
            <th>Wallet Address</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {doctorList.map((doctorItem: any) => {
            return (
              <tr key={doctorItem.id} className="py-2 border-b">
                <td className="py-4 px-2">{doctorItem.id}</td>
                <td className="py-4 px-2 text-center">{doctorItem.name}</td>
                <td className="py-4 px-2 text-center">{doctorItem.category}</td>
                <td className="py-4 px-2 text-center">
                  {doctorItem.chargeStart}
                </td>
                <td className="py-4 px-2 text-center">
                  {shortAddress(doctorItem.walletAddress)}
                </td>
                <td
                  className="py-4 px-2 cursor-pointer hover:text-primary-green"
                  onClick={() => setIsShowModal(true)}
                >
                  Create
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {isShowModal && (
        <CreateAppointmentModal
          isShowModal={isShowModal}
          setIsShowModal={setIsShowModal}
        />
      )}
    </div>
  );
};

export default NewAppointment;
