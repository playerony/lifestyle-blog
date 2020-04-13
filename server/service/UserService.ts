import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { User } from '@model/User'

import { UserType, UserModel, UserAddResult } from '@type/User'

import ValidationError from '@utility/ValidationError'

import keys from '@config/keys'

export default class UserService {
  async signup({ login, password }: UserType): Promise<UserAddResult> {
    const foundUser = await User.findOne<UserModel>({
      where: { login: login! }
    })

    if (foundUser) {
      throw new ValidationError({
        login: ['User with this login already exists.']
      })
    }

    const hashPassword = await bcrypt.hash(password!, keys.hashSalt!)
    const { userId } = await User.create<UserModel>({
      login,
      password: hashPassword
    })

    const token = jwt.sign({ userId }, keys.appSecret!, {
      expiresIn: keys.jwtExpiresIn
    })

    return {
      token
    }
  }

  async login({ login, password }: UserType): Promise<UserAddResult> {
    const foundUser = await User.findOne<UserModel>({
      where: { login: login! }
    })

    if (!foundUser) {
      throw new ValidationError({ login: ['No such user found'] })
    }

    const isValid = await bcrypt.compare(password!, foundUser.password!)
    if (!isValid) {
      throw new ValidationError({ password: ['Invalid password'] })
    }

    const token = jwt.sign({ userId: foundUser.userId }, keys.appSecret!, {
      expiresIn: keys.jwtExpiresIn
    })

    return {
      token
    }
  }
}
