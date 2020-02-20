import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Kanban } from './kanban.entity'
@Entity()
export class List {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @ManyToOne(
        (type) => Kanban,
        (k) => k.lists,
        { onDelete: 'CASCADE' }
    )
    @JoinColumn({ name: 'kanban_id', referencedColumnName: 'id' })
    kanban?: Kanban
}
