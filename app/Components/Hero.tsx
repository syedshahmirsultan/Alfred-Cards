import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HowItWorks from './HowItWorks';
const Hero = () => {
    return (
        <div className=' bg-gradient-to-b from-black to-[rgba(10,14,76,1)] via-black via-[70%] md:via-[60%] lg:overflow-y-hidden  min-h-screen md:max-h-screen w-full'>
        <div className='h-auto w-full'>
            <div className='pt-28 md:pt-12  pb-8 w-full flex flex-col gap-y-6 text-center md:flex-row md:gap-x-32 md:max-w-4xl mx-auto'>
                {/* Cards Image*/}
                <Image src="/images/LandingPageCards.png" alt="cards" height={210} width={210} className='place-self-center md:ml-8'/>
                {/* Alfred Cards portion */}
                <div className='space-y-5 pt-14'>
                <h1 className="text-white tracking-wider font-medium text-2xl">Alfred Cards</h1>
                 <p className='text-gray-300 font-light text-md tracking-wider'>Flashcards are an easy way to <br/>organize your life</p>
                
                {/* Buttons */}
                <div className='flex ml-2 justify-center gap-x-4 md:gap-x-8 pt-4'>
<Link href="/pricing"><button className='w-32 h-10 bg-transparent flex justify-center items-center text-xs hover:font-semibold duration-200 transition-all hover:bg-white hover:text-black text-gray-300 border border-white rounded-lg'>See Pricing</button></Link>
<Link href="/create"><button className='w-32 h-10 bg-white flex justify-center items-center text-xs hover:bg-transparent hover:font-light hover:text-gray-300 duration-200 transition-all text-black font-semibold border border-white rounded-lg'>Create</button></Link>
                </div>
                </div>
            </div>
            
        </div>
        <HowItWorks/>
        </div>
    );
}

export default Hero;
