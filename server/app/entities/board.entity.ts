// import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
// import { Kanban } from './kanban.entity'
// @Entity()
// export class Board {
//     @PrimaryGeneratedColumn('uuid')
//     id: string

//     @Column()
//     title: string

//     @CreateDateColumn()
//     timestamp: string

//     @ManyToMany((type) => Kanban, { cascade: ['insert', 'update', 'remove'], eager: true })
//     @JoinTable()
//     kanbans?: Kanban[]
// }
