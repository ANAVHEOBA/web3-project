import React from "react";

function MyAppointment() {
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
  return (
    <div className="px-4 py-4 border border-[#f0f0f0] rounded  flex flex-col dark:border-dark-input-border dark:bg-dark-card">
      <h4 className="heading dark:text-primary-yellow">My Appointment</h4>
      <table className="mt-8">
        <thead>
          <tr className="text-left border-b border-[#f0f0f0] dark:border-dark-input-border">
            <th className="text-left">Doctor Id</th>
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
                <td className="py-2 px-1">Fever Headche and stomach Pain</td>
                <td className="py-2 px-1">Diabeties</td>
                <td className="py-2 px-1">2023-02-20</td>
                <td className="py-2 px-1">11:30</td>
                <td className="py-2 px-1">View</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MyAppointment;
