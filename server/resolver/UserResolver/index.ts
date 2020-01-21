import { Resolver, Query, Mutation, Arg } from 'type-graphql'

import { UserAddResult } from '@type/User'

import UserService from '@service/UserService'

import Logger from '@utility/Logger'
import ValidationError from '@utility/ValidationError'

import { loginValidation, signupValidation } from './UserResolver.validator'

@Resolver()
export default class UserResolver {
  constructor(private userService: UserService = new UserService()) {}

  @Query(type => UserAddResult)
  async signup(
    @Arg('login', type => String!) login: string,
    @Arg('password', type => String!) password: string
  ): Promise<UserAddResult> {
    const requestData = { login, password }

    try {
      signupValidation(requestData)

      return await this.userService.signup(requestData)
    } catch (e) {
      if (e instanceof ValidationError) {
        Logger.database(e.message)

        throw Error(e.message)
      }

      Logger.database(e.toString())
      throw Error(e.toString())
    }
  }

  @Mutation(type => UserAddResult)
  async login(
    @Arg('login', type => String!) login: string,
    @Arg('password', type => String!) password: string
  ): Promise<UserAddResult> {
    const requestData = { login, password }

    try {
      loginValidation(requestData)

      return await this.userService.login(requestData)
    } catch (e) {
      if (e instanceof ValidationError) {
        Logger.database(e.message)

        throw Error(e.message)
      }

      Logger.database(e.toString())
      throw Error(e.toString())
    }
  }
}
