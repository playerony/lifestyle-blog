import { INTEGER } from 'sequelize'
import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo
} from 'sequelize-typescript'

import Role from './Role'
import User from './User'

@Table
export default class UserRole extends Model<UserRole> {
  @Column({
    type: INTEGER,
    field: 'UserRoleId',
    primaryKey: true,
    autoIncrement: true
  })
  userRoleId!: number

  @Column({ type: INTEGER, field: 'UserId' })
  @ForeignKey(() => User)
  userId!: number

  @BelongsTo(() => User, { onDelete: 'CASCADE' })
  user!: User

  @Column({ type: INTEGER, field: 'RoleId' })
  @ForeignKey(() => Role)
  roleId!: number

  @BelongsTo(() => Role, { onDelete: 'CASCADE' })
  role!: Role
}
