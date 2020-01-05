import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { User, UserAddModel, UserAddResult } from '@model/User'

import keys from '@config/keys'

export default class UserService {
  async signup({ login, password }: UserAddModel): Promise<UserAddResult> {
    const hashPassword = await bcrypt.hash(password, keys.hashSalt!)

    const createdUser = await User.create({
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
    const foundUser = await User.findOne({ where: { login } })

    if (!foundUser) {
      throw new Error('No such user found')
    }

    const isValid = await bcrypt.compare(password, foundUser.password)
    if (!isValid) {
      throw new Error('Invalid password')
    }

    const token = jwt.sign({ userId: foundUser.userId }, keys.appSecret!)

    return {
      token,
      user: foundUser
    }
  }
}
