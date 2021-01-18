import { EntityRepository, Repository } from "typeorm";
import { IStudent } from "../../core/entities/student";
import { Student } from "../models/student";

@EntityRepository(Student)
export class StudentRepository extends Repository<Student> {
  async createStudent (data: IStudent) {
    const student = this.create(data)

    return await this.save(student)
  }

  async findStudent (id: number) {
    return await this.findOne({ id })
  }
}