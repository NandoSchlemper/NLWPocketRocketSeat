import { pgTable, text, integer, timestamp } from 'drizzle-orm/pg-core'
import { createId } from '@paralleldrive/cuid2'

// Após criarmos os schemas, podemos apenas utilizar drizzle-kit migrate para criar as migrações
// Com base no que temos escriot em drizzle.config.ts (confif padrão inclusive)

export const goals = pgTable('goals', {
  id: text('id')
    .primaryKey() //  Aqui criamos o metodo do objeto resultante de primaryKey
    .$defaultFn(() => createId()), // O objeto resultante de $defaultFn terá o valor de createId()
  title: text('title').notNull(),
  desiredWeeklyFrequency: integer('desired_weekly_frequency').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }) // Timestamp permite criarmos um prefixo ('created_at')
    // e logo após isso, o valor, que nesse caso é "withTimezone", podendo ser utilizado em qualquer lugar do mundo
    .notNull()
    .defaultNow(),
})

export const goalCompletion = pgTable('goal_completion', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  goalId: text('goal_id')
    .references(() => goals.id)
    .notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
})
