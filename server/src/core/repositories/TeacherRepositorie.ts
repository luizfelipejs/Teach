import { ITeacher } from '../entities/teacher'

export interface ITeacherRepositorie {
  createTeacher: (data: ITeacher) => Promise<ITeacher>;
  findTeacher: (id: number) => Promise<ITeacher>;
}
