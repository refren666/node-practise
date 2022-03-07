import { Column, Entity } from 'typeorm';
import { CommonFields } from './commonFields';

export interface IUser {
  firstName: string;
  lastName: string;
  age?: number;
  phone: string;
  email: string;
  password: string;
}

@Entity('Users', { database: 'okten' })
export class User extends CommonFields implements IUser {
  @Column({
    type: 'varchar',
    width: 255,
    nullable: false,
  })
    firstName: string; // name of the column

  @Column({
    type: 'varchar',
    width: 255,
    nullable: false,
  })
    lastName: string; // name of the column

  @Column({
    type: 'int',
  })
    age?: number; // name of the column

  @Column({
    type: 'varchar',
    width: 255,
    nullable: false,
    unique: true,
  })
    phone: string; // name of the column

  @Column({
    type: 'varchar',
    width: 255,
    nullable: false,
    unique: true,
  })
    email: string; // name of the column

  @Column({
    type: 'varchar',
    width: 255,
    nullable: false,
  })
    password: string; // name of the column
}
