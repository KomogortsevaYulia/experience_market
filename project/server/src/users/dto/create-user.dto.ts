export class CreateUserDto {
    last_name: string
    name: string
    patronymic: string
    username: string
    birthdate: Date
    phone: string
    email: string
    gender: string
    permission: string[]
}
