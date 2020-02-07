import { Task } from './task'

export interface Kanban {
    id?: string
    title?: string
    timestamp?: string
    tasks?: Task[]
}
