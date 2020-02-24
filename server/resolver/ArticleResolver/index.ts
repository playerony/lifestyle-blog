import { Resolver, Mutation, Query, Arg, Ctx, Int } from 'type-graphql'

import ArticleService from '@service/ArticleService'
import VisitorService from '@service/VisitorService'

import Context from '@type/Context'
import { ArticleType, ArticleSaveRequest } from '@type/Article'

import getUserId from '@utility/getUserId'

import {
  articleByIdValidation,
  createArticleValidation,
  updateArticleValidation
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
    @Arg('article', type => ArticleSaveRequest) article: ArticleSaveRequest
  ): Promise<ArticleType> {
    const userId = getUserId(context)

    createArticleValidation(article)

    return this.articleService.create(article, userId)
  }

  @Mutation(type => ArticleType)
  async updateArticle(
    @Ctx() context: Context,
    @Arg('articleId', type => Int) articleId: number,
    @Arg('article', type => ArticleSaveRequest) article: ArticleSaveRequest
  ): Promise<ArticleType | null> {
    const userId = getUserId(context)

    updateArticleValidation(articleId, article)

    return this.articleService.update(articleId, article, userId)
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
