"use client"
import React, { useEffect, useState } from 'react';
import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/types';
import flashCard from '@/types';
import { getAllFlashCardsByUserId, handleDelete } from './apiCallng';
import { useRouter } from 'next/navigation';

const FlashCards = ({ user }: { user: KindeUser | null }) => {
    const [flashCards, setFlashCards] = useState<flashCard[]>([]);
    const router = useRouter();
    
    function OnClickHandleDelete(){
   handleDelete(user?.id as string);
     router.refresh();
    }

    useEffect(() => {
        const fetchData = async () => {
            if (user?.id) {
                const response = await getAllFlashCardsByUserId(user.id);;
                setFlashCards(response);
            }
        };
        fetchData();
    }, [user]);

    return (
        <div className="mt-20">
            <h1 className="text-white text-center font-bold tracking-wider text-2xl md:text-3xl mb-4">Your Flash Cards</h1>
            <div className="w-[70%] mt-12 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 lg:max-w-6xl mx-auto">
                {flashCards.length > 0 ? (
                    flashCards.map((item, index) => (
                        <div key={index} className={`${item.flashcardcolor} h-96 z-20 w-full md:w-64 rounded-xl shadow-md flex flex-col`}>
                            <h3 className="pt-16 text-white p-4 text-center text-2xl md:text-3xl font-semibold">{item.flashcardtitle}</h3>
                            <p className="flex justify-center items-center text-center p-4 mt-12 text-md font-medium text-white">{item.flashcardtext}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-white text-center">No flash cards available.</p>
                )}
 </div>
                <div className='mt-12 w-full flex justify-center'>
                {flashCards.length > 0 ? 
                (<button onClick={OnClickHandleDelete} className=" hover:bg-red-700 bg-red-600 text-center text-white rounded-lg px-4 py-2">
                Delete All Flashcards
                </button>) 
                : ""}
               
            </div>
        </div>
    );
}

export default FlashCards;
