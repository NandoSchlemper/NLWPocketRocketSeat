import { defineConfig } from 'drizzle-kit'
import { env } from './src/env'

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './.migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DB_URL,
  },
})
// Estamos utilizando Drizzle por conta das Queries no DB
// Drizzle é bom por conta disso, podemos criar subqueries facilmente com Drizzle
