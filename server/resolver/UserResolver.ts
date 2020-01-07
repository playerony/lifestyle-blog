import { Resolver, Query, Arg } from 'type-graphql'

import { UserAddResult } from '@type/User'

import UserService from '@server/service/UserService'

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
    return await this.userService.signup({ login, password })
  }

  @Query(type => UserAddResult)
  async login(
    @Arg('login', type => String!) login: string,
    @Arg('password', type => String!) password: string
  ): Promise<UserAddResult> {
    return await this.userService.login({ login, password })
  }
}
