export type Category = 'general' | 'required' | 'optional'

export interface Task {
  name: string
  done: boolean
  category?: Category
}
