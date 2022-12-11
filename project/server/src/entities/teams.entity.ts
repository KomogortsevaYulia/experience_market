import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity("teams")
export class Team {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column({nullable:true})
    team_size: string

}