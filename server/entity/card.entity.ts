import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  done: boolean;

  @Column()
  doing: boolean;

  @Column()
  todo: boolean;
  
  @Column()
  position:number;
}
