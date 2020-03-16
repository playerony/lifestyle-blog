import { Resolver, Query, Mutation, Arg, Ctx } from 'type-graphql'

import UserService from '@service/UserService'

import Context from '@type/Context'
import { UserAddResult } from '@type/User'

import getUserId from '@utility/getUserId'

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

  @Query(type => Boolean)
  async isAuthenticated(@Ctx() context: Context): Promise<boolean> {
    try {
      getUserId(context)

      return true
    } catch {
      return false
    }
  }
}
