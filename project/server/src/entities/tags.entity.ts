import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("tags")
export class Tag {
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    title: string

    @Column({nullable: true})
    description: string
}