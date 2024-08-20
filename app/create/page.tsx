import React from 'react';
import Image from 'next/image';
import { cardDetails } from '@/data';
import Modal from '../Components/Modal';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
const Create = async() => {
 
const {getUser} = getKindeServerSession();
const user= await getUser();

    return (
        <div className="bg-gradient-to-b from-black to-[rgba(10,14,76,1)] min-h-screen w-full pt-20 pb-20 text-white">
            {/* Cards Mapping*/}
         <div className='max-w-6xl mx-auto grid lg:grid-cols-3 md:justify-between grid-cols-1 md:grid-cols-2 gap-y-8'>
            {
               cardDetails.map((item,index) => (
                <Image src={item.imageUrl} alt={item.altText} height={250} width={250} key={index} className='cursor-pointer place-self-center'/>
               )) 
            }
            </div>
        {/* Generate FlashCard Button Functionality*/}
        <Modal user={user}/>
            {/* <form className="mt-16 w-[90%] md:max-w-2xl lg:max-w-3xl mx-auto h-12 rounded-lg border border-white flex justify-between">
            <input type="text" placeholder='Create flashcards about Pakistan' className=" md:tracking-wider h-full outline-none w-[80%] md:w-[85%] ml-4 bg-transparent text-gray-300 text-sm md:text-md"/>
           <button className="text-gray-400 hover:text-white text-sm md:text-lg pr-2 md:pr-0 w-[20%] md:w-[15%]">Create</button>
            </form> */}
         </div>
    
    );
}

export default Create;
