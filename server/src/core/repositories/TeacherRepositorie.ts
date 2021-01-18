import { ITeacher } from '../entities/teacher'

export interface ITeacherRepositorie {
  createTeacher: (data: ITeacher) => Promise<void>;
  findTeacher: (id: number) => Promise<ITeacher>;
}
