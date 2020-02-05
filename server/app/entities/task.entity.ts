import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Kanban } from './kanban.entity'
@Entity()
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    color: string

    @Column()
    status: string

    @CreateDateColumn()
    timestamp: string

    @ManyToOne(
        (type) => Kanban,
        (kanban) => kanban.tasks
    )
    @JoinColumn({ name: 'kanban_id', referencedColumnName: 'id' })
    kanban: Kanban
}
