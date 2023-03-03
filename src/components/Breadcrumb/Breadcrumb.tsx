import React from 'react'

type props = {
  heading: string;
  subHeading: string;
}

const Breadcrumb : React.FC<props> = ({heading, subHeading}) => {
  return (
    <div className='px-5 py-10 bg-dark-blue text-white dark:bg-[#030B29]'>
        <p className='dark:text-primary-yellow'>{subHeading}</p>
        <h6 className='text-3xl font-semibold'>{heading}</h6>
    </div>
  )
}

export default Breadcrumb