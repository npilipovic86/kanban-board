import { getRepository } from 'typeorm'
import { Kanban } from '../entities/kanban.entity'
import { Task } from '../entities/task.entity'

export class KanbanRepository {
    private readonly repository = getRepository(Kanban)

    async getAll() {
        return await this.repository.find()
    }

    async save(item: Kanban) {
        return await this.repository.save(item)
    }

    async delete(id: string) {
        return await this.repository.delete(id)
    }

    async getById(id: string) {
        return await this.repository.findOne(id)
    }
    async update(id: string, newItem: Kanban) {
        return await this.repository.update(id, newItem)
    }
    async addNewTask(kanbanId: string, task: Task) {
        const kanban = await this.getById(kanbanId)
        kanban.tasks.push(task)
        let retVal = await this.repository.save(kanban)
        let result = retVal.tasks.find((t) => t.description === task.description && t.title === task.title && t.color === task.color)
        return result
    }
}
