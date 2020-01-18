import { Resolver, Query, Mutation, Arg } from 'type-graphql'

import { UserAddResult } from '@type/User'

import UserService from '@server/service/UserService'

import { loginValidation, signupValidation } from './UserResolver.validator'

@Resolver()
export default class UserResolver {
  private userService: UserService

  constructor() {
    this.userService = new UserService()
  }

  @Query(type => UserAddResult)
  async signup(
    @Arg('login', type => String!) login: string,
    @Arg('password', type => String!) password: string
  ): Promise<UserAddResult> {
    const requestData = { login, password }

    signupValidation(requestData)

    return await this.userService.signup({ login, password })
  }

  @Mutation(type => UserAddResult)
  async login(
    @Arg('login', type => String!) login: string,
    @Arg('password', type => String!) password: string
  ): Promise<UserAddResult> {
    const requestData = { login, password }

    loginValidation(requestData)

    return await this.userService.login(requestData)
  }
}
