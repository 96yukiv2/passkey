import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { db } from './db.js'

const app = new Hono()

app.use('*', cors({
  origin: 'http://localhost:3000'
}))
app.get('/', (c) => {
  return c.text('Hello Hono!')
})
app.get('/users', (c) => {
  const users = db.prepare(
    'SELECT id, created_at FROM users'
  ).all()
  return c.json(users)
})

serve({
  fetch: app.fetch,
  port: 3001
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
