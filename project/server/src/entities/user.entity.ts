import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Event } from "..//entities/event.entity"

@Entity("users")
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    last_name: string
    
    @Column()
    name: string

    @Column({nullable:true})
    patronymic: string

    @Column()
    username: string

    @Column({nullable:true})
    birthdate: Date

    @Column({nullable:true})
    phone: string

    @Column()
    email: string

    @Column({
        type: "enum",
        enum: ["male", "female"],
        default: "male"
    })
    gender: string

    @Column("simple-array")
    permission: string[]

}
