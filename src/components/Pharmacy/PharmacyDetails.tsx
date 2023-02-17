import React from 'react'
import ProfileTab from '../DoctorProfile/ProfileTab'
import PharmacyGeneral from './PharmacyGeneral'

function PharmacyDetails() {
  return (
    <div className="px-5 py-5 m-5">
      <div>
        <PharmacyGeneral />
        {/* <ProfileGeneral /> */}
      </div>
      <div>
        <ProfileTab />
      </div>
    </div>
  )
}

export default PharmacyDetails