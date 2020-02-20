// import { getRepository } from 'typeorm'
// import { Board } from '../entities/board.entity'
// import { Kanban } from '../entities/kanban.entity'
// import { Task } from '../entities/task.entity'

// export class BoardRepository {
//     private readonly repository = getRepository(Board)

//     async getAll() {
//         return await this.repository.find()
//     }

//     async save(item: Task) {
//         return await this.repository.save(item)
//     }

//     async delete(id: string) {
//         return await this.repository.delete(id)
//     }

//     async getById(id: string) {
//         return await this.repository.findOne(id)
//     }
//     async update(id: string, newItem: Task) {
//         return await this.repository.update(id, newItem)
//     }
//     async addNewKanban(boardId: string, kanban: Kanban) {
//         const board = await this.getById(boardId)
//         board.kanbans.push(kanban)
//         let retVal = await this.repository.save(board)
//         let result = retVal.kanbans.find((t) => t.title === kanban.title)
//         return result
//     }
// }
