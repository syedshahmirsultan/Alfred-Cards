import { db, flashCardTable } from "@/lib/drizzle";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function GET(req: NextRequest) {
    const url = req.nextUrl.searchParams;

    if (url.has('userid')) {
        const userid = url.get('userid');

        if (userid !== null) {
            const flashCardData = await db.select().from(flashCardTable).where(eq(flashCardTable.userid, userid));
            return NextResponse.json(flashCardData);
        } else {
            return NextResponse.json({ error: "userid cannot be null" });
        }
    } else {
        return NextResponse.json({ error: "Error in GET Request" });
    }
}


export async function POST (req:NextRequest){
    const body = await req.json()
    const flashCardData = await db.insert(flashCardTable).values(body).returning();
    return NextResponse.json(flashCardData) ;
}



// export async function DELETE(req:NextRequest){
//     const url = req.nextUrl.searchParams;
//     if(url.has('userid')){
//         const {userid} = {userid : url.get('userid')}
//         if(userid != null){
//  await db.delete(flashCardTable).where(eq(flashCardTable.userid,userid)) 
//   console.log( "Deleted" )}
// else {
//     return NextResponse.json({ error: "userid cannot be null" });
// }
// } 

// else {
//    return "Error in Delete Request" 
// }
// }

export async function DELETE(req: NextRequest) {
    const url = req.nextUrl.searchParams;
    const userid = url.get('userid');

    if (userid) {
        try {
            await db.delete(flashCardTable).where(eq(flashCardTable.userid, userid));
            console.log("Deleted");
            return NextResponse.json({ message: "Deleted successfully" });
        } catch (error) {
            console.error("Error deleting flashcards:", error);
            return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
        }
    } else {
        return NextResponse.json({ error: "userid cannot be null" }, { status: 400 });
    }
}