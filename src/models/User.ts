import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import FixedExpenses from "./FixedExpenses";


@Entity('users')
class User {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name: string

    @Column()
    email: string
    
    @Column()
    password: string

    @Column()
    salary: number
      
    @OneToMany(type => FixedExpenses, user => User)
    fixed: FixedExpenses[]

}

export default User