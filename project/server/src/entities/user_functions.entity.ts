import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm"
import { Tag } from "./tags.entity"
import { User } from "./user.entity"
import { Function } from "./functions.entity"
@Entity("user_functions")
export class UserFunction {
    @PrimaryGeneratedColumn()
    id: number

    @JoinColumn([
        { name: "user_id" ,}
    ])
    @ManyToOne(() => User, (user) =>user.id)
    user: User

    @JoinColumn([
        { name: "function_id" ,}
    ])
    @ManyToOne(() => Function, (func) => func.id)
    function: Function

    @Column({nullable:true})
    date_start: Date

    @Column({nullable:true})
    date_end: Date

    @Column({nullable:true})
    title: string

    @Column({nullable:true})
    linkInfoUser: string

    @Column({
        type: "enum",
        enum: ["take", "not viewed","deny"],
        default: "not viewed"
    })
    status: string
}