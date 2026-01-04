
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
// import * as schema from "../server/schema.ts";//TODO: descomentar cuando se quiere agregar datos mediamnte el seed, ya que el tsconfig necesita ser corregido para poder agregar datos mediante el comando pnpm run seed
import * as schema from '../server/schema';

const db = drizzle(process.env.DATABASE_URL!, { schema, logger: true });
// if (!db) throw new Error('No hay ninguna base de datos conectada');
export default db;


// https://www.youtube.com/watch?v=pQi8asUIbUY
// npx drizzle-kit generate
// npx drizzle-kit migrate
// npx drizzle-kit push
// npx drizzle-kit studio
// npx drizzle-kit studio --host 0.0.0.0
// npx drizzle-kit pull
// npx drizzle-kit check
// npx drizzle-kit up;


// para filtrar data por tiempo de creacion: 
// https://stackoverflow.com/questions/79685280/filtering-by-dates-in-drizzle-orm