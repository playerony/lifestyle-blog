import { Resolver, Mutation, Arg, Ctx } from 'type-graphql'

import ArticleService from '@service/ArticleService'

import Context from '@type/Context'
import { ArticleCreateRequest, ArticleCreateResult } from '@type/Article'

import getUserId from '@utility/getUserId'

import { createArticleValidation } from './ArticleResolver.validator'

@Resolver()
export default class ArticleResolver {
  constructor(private articleService: ArticleService = new ArticleService()) {}

  @Mutation(type => ArticleCreateResult)
  async createArticle(
    @Ctx() context: Context,
    @Arg('article', type => ArticleCreateRequest!) article: ArticleCreateRequest
  ): Promise<ArticleCreateResult> {
    const userId = getUserId(context)

    createArticleValidation(article)

    return await this.articleService.create(article, userId)
  }
}
