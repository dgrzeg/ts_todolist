import { Category, Task } from '../types/types.js'

const tasks: Task[] = [
  { name: 'Learn TS', done: false },
  { name: 'Learn Vue', done: true, category: Category.REQUIRED },
  { name: 'Learn Nuxt', done: false, category: Category.OPTIONAL },
  { name: 'Sleep', done: false, category: Category.OPTIONAL },
  { name: 'Eat', done: false, category: Category.GENERAL },
]

export default tasks
