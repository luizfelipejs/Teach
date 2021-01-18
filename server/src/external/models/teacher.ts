import { Column, Entity, JoinTable, ManyToMany,  PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./student";

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn('increment')
  id: number
 
  @Column()
  name: string;
  
  @Column()
  username: string

  @Column()
  email: string

  @Column()
  password: string

  @ManyToMany(type => Student, student => student.teachers)
  @JoinTable()
  students: Teacher[]

  @Column({ default: "default" })
  recover_password_token: string

  @Column({ default: "default" })
  recover_password_expires: Date
}