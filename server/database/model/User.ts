import { INTEGER, STRING } from 'sequelize'
import { Table, Column, Model, Length } from 'sequelize-typescript'

@Table
export default class User extends Model<User> {
  @Column({
    type: INTEGER,
    field: 'UserId',
    primaryKey: true,
    autoIncrement: true
  })
  userId!: number

  @Length({ min: 1, max: 100 })
  @Column({ type: STRING, field: 'Login', unique: true })
  login!: string

  @Length({ min: 1, max: 120 })
  @Column({ type: STRING, field: 'Password' })
  password!: string
}
