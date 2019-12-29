import { INTEGER, STRING } from 'sequelize'
import { Table, Column, Model, Length } from 'sequelize-typescript'

@Table
export default class Role extends Model<Role> {
  @Column({
    type: INTEGER,
    field: 'RoleId',
    primaryKey: true,
    autoIncrement: true
  })
  roleId!: number

  @Length({ min: 1, max: 30 })
  @Column({ type: STRING, field: 'RoleName' })
  roleName!: string
}
