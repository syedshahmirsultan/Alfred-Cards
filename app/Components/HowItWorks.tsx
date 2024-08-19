import React from 'react';

const HowItWorks = () => {
    return (
    <div className='bg-transparent h-auto lg:h-24 pb-12 pt-10 w-full'>
            <div className=' max-w-4xl mx-auto pt-2 space-y-2'>
        <text className='text-gray-200 text-lg md:text-xl tracking-wider flex flex-col items-center lg:items-start  '>How it works</text>
        <div className="text-gray-300 flex flex-col gap-y-2 text-sm md:text-md p-4" >
        <p>Users give a prompt to generate flashcards based on a topic. It helps user get a unique flashcard.</p>
         <p>Premium users get more personalized cards, however, Free users get standard cards. </p>
        </div></div></div>
    );
}

export default HowItWorks;
