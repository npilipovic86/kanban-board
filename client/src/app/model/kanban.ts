import { Task } from './task'

export interface Kanban {
    id: String
    title: String
    tasks: Task[]
}
