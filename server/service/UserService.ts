import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { User } from '@model/User'

import { UserModel, UserAddResult, UserAddModel } from '@type/User'

import ValidationError from '@utility/ValidationError'

import keys from '@config/keys'

export default class UserService {
  async signup({ login, password }: UserAddModel): Promise<UserAddResult> {
    const foundUser = await User.findOne<UserModel>({ where: { login } })

    if (foundUser) {
      throw new ValidationError({
        login: ['User with this login already exists.']
      })
    }

    const hashPassword = await bcrypt.hash(password, keys.hashSalt!)
    const createdUser = await User.create<UserModel>({
      login,
      password: hashPassword
    })

    const token = jwt.sign({ userId: createdUser.userId }, keys.appSecret!)

    return {
      token,
      user: createdUser
    }
  }

  async login({ login, password }: UserAddModel): Promise<UserAddResult> {
    const foundUser = await User.findOne<UserModel>({ where: { login } })
    if (!foundUser) {
      throw new ValidationError({ login: ['No such user found'] })
    }

    const isValid = await bcrypt.compare(password, foundUser.password!)
    if (!isValid) {
      throw new ValidationError({ password: ['Invalid password'] })
    }

    const token = jwt.sign({ userId: foundUser.userId }, keys.appSecret!)

    return {
      token,
      user: foundUser
    }
  }
}
