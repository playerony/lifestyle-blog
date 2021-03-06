import { Resolver, Mutation, Query, Arg, Ctx, Int } from 'type-graphql'

import ArticleService from '@service/ArticleService'
import VisitorService from '@service/VisitorService'

import Context from '@type/Context'
import { ArticleType, ArticleSaveRequest } from '@type/Article'

import getUserId from '@utility/getUserId'

import {
  articleByIdValidation,
  createArticleValidation,
  updateArticleValidation,
  incrementArticleLikesValidation,
  toggleArticlePublicFlagValidation
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

  @Mutation(type => ArticleType)
  async toggleArticlePublicFlag(
    @Ctx() context: Context,
    @Arg('articleId', type => Int) articleId: number,
    @Arg('isPublic', type => Boolean) isPublic: boolean
  ): Promise<ArticleType | null> {
    getUserId(context)

    toggleArticlePublicFlagValidation(articleId, isPublic)

    return this.articleService.togglePublicFlag(articleId, isPublic)
  }

  @Mutation(type => Int)
  async incrementArticleLikes(
    @Arg('articleId', type => Int) articleId: number
  ): Promise<number> {
    incrementArticleLikesValidation(articleId)

    return this.articleService.incrementArticleLikes(articleId)
  }

  @Query(type => [ArticleType])
  async articleList(
    @Ctx() context: Context,
    @Arg('onlyPublic', type => Boolean) onlyPublic?: boolean
  ): Promise<ArticleType[]> {
    await this.visitorService.create(null, context)

    return this.articleService.findAll(onlyPublic)
  }

  @Query(type => ArticleType)
  async articleById(
    @Ctx() context: Context,
    @Arg('articleId', type => Int) articleId: number
  ): Promise<ArticleType | null> {
    articleByIdValidation(articleId)

    await this.visitorService.create(articleId, context)

    return this.articleService.findById(
      articleId,
      context?.token === '' ? true : undefined
    )
  }
}
