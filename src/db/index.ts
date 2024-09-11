// criando a conexão com o DB

import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'
import { env } from '../env'

export const client = postgres(env.DB_URL)
export const db = drizzle(client, { schema, logger: true })
// Log em todas as queries que fizermos no DB
