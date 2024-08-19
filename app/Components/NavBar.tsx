"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
    const [isOpen , setIsOpen] = useState(false);
    return (
        <div className='bg-black h-16 w-full flex pr-6 md:pr-12 pl-4 md:pl-12 items-center justify-between'>
            {/* Logo Text*/}
            <Link href="/"><p className='text-gray-300 text-xs whitespace-nowrap md:text-sm'> Powered by Alfred AI</p></Link>
            {/*Navigation Options*/}
            <div className='text-gray-300 text-sm  gap-x-4 hidden md:flex'>
            <Link href="/about" className='hover:text-white'>About us</Link>
            <Link href="/create" className='hover:text-white'>Create</Link>
            </div>

{/*Mobile Screen Navigation Options */}
<div className=' inline md:hidden'>
 <RxHamburgerMenu size={22} onClick={()=> setIsOpen(!isOpen)} className='cursor-pointer mr-4 relative text-gray-200 hover:text-white duration-200 transition-all'/> 
   {isOpen && (<div className='absolute w-28 h-auto duration-200 transition-all p-3 mt-2 rounded-lg top-10 right-10 text-gray-400  bg-black border border-gray-300 flex flex-col items-center'>
    <Link href="" className='hover:text-white text-sm'>About us</Link>
    <Link href="/create" className='hover:text-white text-sm'>Create</Link>


   </div>)}   
</div>
        </div>
    );
}

export default NavBar;


