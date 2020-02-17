import { Resolver, Mutation, Query, Arg, Ctx, Int } from 'type-graphql'

import ArticleService from '@service/ArticleService'
import VisitorService from '@service/VisitorService'

import Context from '@type/Context'
import { ArticleType, ArticleCreateRequest } from '@type/Article'

import getUserId from '@utility/getUserId'

import {
  articleByIdValidation,
  createArticleValidation
} from './ArticleResolver.validator'

@Resolver()
export default class ArticleResolver {
  constructor(
    private articleService: ArticleService = new ArticleService(),
    private visitorService: VisitorService = new VisitorService()
  ) {}

  @Mutation(type => ArticleType)
  async createArticle(
    @Ctx() context: Context,
    @Arg('article', type => ArticleCreateRequest!) article: ArticleCreateRequest
  ): Promise<ArticleType> {
    const userId = getUserId(context)

    createArticleValidation(article)

    return this.articleService.create(article, userId)
  }

  @Query(type => [ArticleType])
  async articleList(@Ctx() context: Context): Promise<ArticleType[]> {
    await this.visitorService.create(null, context)

    return this.articleService.findAll()
  }

  @Query(type => ArticleType)
  async articleById(
    @Ctx() context: Context,
    @Arg('articleId', type => Int) articleId: number
  ): Promise<ArticleType | null> {
    articleByIdValidation(articleId)

    await this.visitorService.create(articleId, context)

    return this.articleService.findById(articleId)
  }
}
