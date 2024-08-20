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
