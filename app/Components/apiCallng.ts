import flashCard from "@/types";



// export async function getAllFlashCardsByUserId(userid:string){
//     const flashcardData = await fetch(`http://localhost:3000/api/flashCards?userid=${userid}`,{
//         cache : "no-store"
//       })

//     if(!flashcardData.ok){
//         return "Error in getAllFlashCardsByUserId Function"
//     }
//     const data: flashCard[] = await flashcardData.json(); // Ensure the response is parsed as JSON and matches the type
//     return data;
// }

export async function getAllFlashCardsByUserId(userid: string): Promise<flashCard[]> {
    try {
        const flashcardData = await fetch(`https://alfredcards.vercel.app/api/flashCards?userid=${userid}`);

        if (!flashcardData.ok) {
            throw new Error("Error in getAllFlashCardsByUserId Function");
        }

        const data: flashCard[] = await flashcardData.json(); // Ensure the response is parsed as JSON
        return data;
    } catch (error) {
        console.error(error);
        return []; // Return an empty array on error
    }
}



export async function handleAddFlashCard(userid:string,flashcardColor:string,flashcardText:string,flashcardTitle:string){

    const data = {
     userid:userid,
     flashcardcolor:flashcardColor,
     flashcardtext:flashcardText,
     flashcardtitle:flashcardTitle
    }
    
    const flashcardData = await fetch(`https://alfredcards.vercel.app/api/flashCards`, {
        method : "POST",
        headers : {
        "Content-Type" :"application/json"
        },
        body: JSON.stringify(data)
    })

    if(!flashcardData.ok){
        return "Error in Adding FlashCard"
    }

    return "Okay !"
}


export async function handleDelete(userid:string){
 const res = await fetch(`https://alfredcards.vercel.app/api/flashCards?userid=${userid}`,{
    method: "DELETE"
 })
 
}


