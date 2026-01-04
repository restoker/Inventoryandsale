import {
    pgTable,
    text,
    boolean,
    pgEnum,
} from 'drizzle-orm/pg-core';

export const RoleEnum = pgEnum("roles", ["saler", "admin", "superadmin"]);

export const users = pgTable('user', {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    nombre: text('nombre').notNull(),
    apellidos: text('apellidos').notNull(),
    username: text('username').notNull(),
    email: text('email').notNull(),
    password: text('password').notNull(),
    phone: text('phone'),
    image: text('image'),
    isActive: boolean('isActive').default(true),
    role: RoleEnum('role').default('saler'),
})