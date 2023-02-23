import React, { useState } from "react";
import AppointmentModal from "./AppointmentModal";

type props = {
  isShowModal: boolean;
  setIsModal: (isShowModal: boolean) => void;
};

const DoctorAppointments = () => {
  const appointmentList = [
    {
      id: 1,
      Symptoms: "Fever Headche and stomach Pain",
      pastMedicalHistory: "Diabeties",
      date: "2023-02-20",
      time: "11:30",
      view: "",
    },
    {
      id: 2,
      Symptoms: "Fever Headche and stomach Pain",
      pastMedicalHistory: "Diabeties",
      date: "2023-02-20",
      time: "11:30",
      view: "",
    },
    {
      id: 3,
      Symptoms: "Fever Headche and stomach Pain",
      pastMedicalHistory: "Diabeties",
      date: "2023-02-20",
      time: "11:30",
      view: "",
    },
  ];
  const [isShowModal, setIsModal] = useState<boolean>(false);
  return (
    <div className="px-4 py-4 border border-[#f0f0f0] rounded space-y-2 flex flex-col md:flex-row justify-between dark:border-dark-input-border dark:bg-dark-card">
      <table>
        <thead>
          <tr className="text-left border-b border-[#f0f0f0] dark:border-dark-input-border">
            <th className="text-left">Patient Id</th>
            <th>Symptoms</th>
            <th>Past Medical History</th>
            <th>Appointment Date</th>
            <th>Appointment Time</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {appointmentList.map((appointmentItem) => {
            return (
              <tr
                key={appointmentItem.id}
                className="text-left border-b border-[#f0f0f0] dark:border-dark-input-border"
              >
                <td className="text-left">1.</td>
                <td>Fever Headche and stomach Pain</td>
                <td>Diabeties</td>
                <td>2023-02-20</td>
                <td>11:30</td>
                <td onClick={() => setIsModal(true)}>View</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {isShowModal && (
        <AppointmentModal isShowModal={isShowModal} setIsModal={setIsModal} />
      )}
    </div>
  );
};

export default DoctorAppointments;
