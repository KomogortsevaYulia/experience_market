import { IsNotEmpty } from "class-validator"

export class CreateUserDto {
    last_name: string
    name: string
    patronymic: string
    @IsNotEmpty()
    username: string
    birthdate: Date
    @IsNotEmpty()
    password:string
    phone: string
    @IsNotEmpty()
    email: string
    gender: string
    permission: string[]
}
