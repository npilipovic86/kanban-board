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

    async delete(item: Kanban) {
        return await this.repository.remove(item)
    }

    async getById(id: number) {
        return await this.repository.findOne(id)
    }
    async update(id: number, newItem: Kanban) {
        return await this.repository.update(id, newItem)
    }
    async addNewTask(id: number, task: Task) {
        const kanban = await this.getById(id)
        kanban.tasks.push(task)
        return await this.repository.save(kanban)
    }
}
