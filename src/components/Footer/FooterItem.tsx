import React from 'react'
import { BiChevronsRight } from "react-icons/bi";

interface footerItemStruct {
    id: number;
    name: string;
    route: string;
  }

function FooterItem(item: footerItemStruct) {

  return (
    <li className='flex space-x-2 text-white items-center cursor-pointer'>
        <BiChevronsRight className='h-6 w-6' />
        <span className='hover:pl-2 hover:brightness-90 transition transform duration-300 ease-linear'>{item.name}</span>
    </li>
  )
}

export default FooterItem