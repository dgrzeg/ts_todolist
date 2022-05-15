export enum Category {
  GENERAL = 'general',
  REQUIRED = 'required',
  OPTIONAL = 'optional',
}

export interface Task {
  name: string
  done: boolean
  category?: Category
}
