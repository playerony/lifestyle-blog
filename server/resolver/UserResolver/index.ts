import { Resolver, Query, Mutation, Arg } from 'type-graphql'

import UserService from '@service/UserService'

import { UserAddResult } from '@type/User'

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

    signupValidation(requestData)

    return this.userService.signup(requestData)
  }

  @Mutation(type => UserAddResult)
  async login(
    @Arg('login', type => String!) login: string,
    @Arg('password', type => String!) password: string
  ): Promise<UserAddResult> {
    const requestData = { login, password }

    loginValidation(requestData)

    return this.userService.login(requestData)
  }
}
