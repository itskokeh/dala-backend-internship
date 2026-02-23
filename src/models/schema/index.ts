import {sqliteTable, integer, text, real, blob} from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
    id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
    name: text('name').notNull(),
    email: text('email').unique().notNull(),
    homeAddress: text('home_address'),
    phoneNumber: text('phone_number'),
    profilePicture: blob('profile_picture'),
    profilePicture2: text('profile_picture2').default('https://drive.googlecontent.com/uhome_addressser3_profile_picture.png'),
    weight: real('weight'),
    createdAt: integer('created_at', {mode: 'timestamp_ms'}).notNull().$defaultFn(() => new Date())
})

// 77.4kg
// Sun Feb 22, 2026 at 12:00 PM UTC+1
