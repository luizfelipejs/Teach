import { ITeacher } from '../entities/teacher'

export interface ITeacherRepositorie {
  create: (data: ITeacher) => Promise<void>;
  find: (id: number) => Promise<ITeacher>;
}
