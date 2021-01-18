import { Column, Entity, ManyToMany,  PrimaryGeneratedColumn } from "typeorm";                         
import { Teacher } from "./teacher";

@Entity()
export class Student  {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string;
  
  @ManyToMany(type => Teacher, teacher => teacher.students)
  teachers: Teacher[]

  @Column({ unique: true })
  username: string

  @Column()
  email: string

  @Column()
  password: string

  @Column({ default: "default" })
  recover_password_token: string

  @Column({ default: "default" })
  recover_password_expires: Date
}