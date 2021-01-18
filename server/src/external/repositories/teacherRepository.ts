import { Repository, EntityRepository } from 'typeorm'
import { ITeacher } from '../../core/entities/teacher';
import { Teacher } from '../models/teacher';

@EntityRepository(Teacher)
export class TeacherRepository extends Repository<Teacher> {
  async createTeacher (data: ITeacher ) {
    const teacher = this.create(data)

    return await this.save(teacher)
  }
}