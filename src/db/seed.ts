// Ex: Vc vai enviar esse projeto pro seu amg, e vc qr q ele veja as metas cadastradas nesse projeto, aí que criamos
// AS seeds, que vão servir para 'unificar a forma como as pessoas que testarão a aplicação verão'

import { client, db } from '.'
import { goalCompletion, goals } from './schema'

// Popularização do Banco de dados

async function seed() {
  await db.delete(goalCompletion)
  await db.delete(goals)

  const result = await db
    .insert(goals)
    .values([
      { title: 'Acordar + Cedo', desiredWeeklyFrequency: 5 },
      { title: 'Criar vergonha na cara', desiredWeeklyFrequency: 6 },
      { title: 'Comer batata doce', desiredWeeklyFrequency: 1 },
    ])
    .returning()

  await db.insert(goalCompletion).values([
    { goalId: result[0].id, createdAt: new Date() },
    { goalId: result[1].id, createdAt: new Date() },
    { goalId: result[2].id, createdAt: new Date() },
  ])
}

seed().finally(() => {
  client.end
})
