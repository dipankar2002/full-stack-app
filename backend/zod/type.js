const zod = require('zod');

const createUser = zod.object({
  name: zod.string(),
  email: zod.string().email(),
  password: zod.string().max(16).min(6),
  todo: zod.array(createTodo).default([])
})

const createTodo = zod.object({
  id: zod.string(),
  title: zod.string(),
  description: zod.string(),
  status: zod.boolean(),
  date: zod.date()
})

module.exports = {
  createUser: createUser,
  createTodo: createTodo
}