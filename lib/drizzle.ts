import {drizzle} from 'drizzle-orm/vercel-postgres'
import {sql} from '@vercel/postgres'
import { pgTable,varchar } from 'drizzle-orm/pg-core'
import { InferModel } from 'drizzle-orm'

export const flashCardTable = pgTable("flashcardstable", {
    userid: varchar('userid', { length: 255 }).notNull(),
    flashcardcolor: varchar('flashcardcolor', { length: 255 }).notNull(),
    flashcardtext: varchar('flashcardtext', { length: 255 }).notNull(),
    flashcardtitle: varchar('flashcardtitle', { length: 255 }).notNull(),
});


export type typeOfCart = InferModel<typeof flashCardTable>;

export const db = drizzle(sql);
