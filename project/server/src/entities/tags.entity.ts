import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tags")
export class Tag {
    @PrimaryGeneratedColumn()
    title: string

    @Column()
    description: string
}