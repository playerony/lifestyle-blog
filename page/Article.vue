<template>
  <div>
    <LoadingPage v-if="isLoading()" />
    <Article
      :isLike="isLike"
      v-if="!isLoading()"
      :article="articleById"
      :handleReply="handleReply"
      :details="getArticleDetails()"
      :replyErrorData="replyErrorData"
      :comments="commentListByArticleId"
      :handleLikeArticle="handleAddArticleLike"
      :handleLikeComment="handleAddCommentLike"
      :handleDislikeComment="handleRemoveCommentLike"
    />
  </div>
</template>

<script>
import Vue from 'vue'

import LoadingPage from './Loading'
import Article from '@component/Article'

import articleQuery from '@graphql/query/article'
import visitorListQuery from '@graphql/query/visitorList'
import articleCommentListQuery from '@graphql/query/articleCommentList'
import { CREATE_COMMENT_MUTATION } from '@graphql/mutation/createComment'
import { INCREMENT_ARTICLE_LIKES_MUTATION } from '@graphql/mutation/incrementArticleLikes'
import { INCREMENT_COMMENT_LIKES_MUTATION } from '@graphql/mutation/incrementCommentLikes'
import { DECREMENT_COMMENT_LIKES_MUTATION } from '@graphql/mutation/decrementCommentLikes'

import tryParseJSON from '@utility/tryParseJSON'

import articleTransformator from '@transformator/articleTransformator'

import routeList from '@config/routeList'

export default {
  name: 'page-article',
  data() {
    return {
      isLike: false,
      visitorList: [],
      articleById: {},
      replyErrorData: {},
      commentListByArticleId: [],
      articleId: Number(this.$route.params.articleId)
    }
  },
  components: {
    Article,
    LoadingPage
  },
  apollo: {
    visitorList: visitorListQuery,
    articleById: {
      ...articleQuery,
      variables() {
        return {
          articleId: this.articleId
        }
      }
    },
    commentListByArticleId: {
      ...articleCommentListQuery,
      variables() {
        return {
          articleId: this.articleId
        }
      }
    }
  },
  methods: {
    isLoading() {
      return (
        this.$apollo.queries.articleById.loading ||
        this.$apollo.queries.visitorList.loading ||
        this.$apollo.queries.commentListByArticleId.loading
      )
    },
    getArticleDetails() {
      return articleTransformator(
        this.articleId,
        this.visitorList,
        this.commentListByArticleId
      )
    },
    handleReply(reply) {
      this.$apollo
        .mutate({
          mutation: CREATE_COMMENT_MUTATION,
          variables: {
            comment: { ...reply, articleId: this.articleId }
          }
        })
        .then(response => {
          const createdComment = response.data.createComment

          const foundCommentIndex = this.commentListByArticleId.findIndex(
            comment => comment.commentId === createdComment.parentCommentId
          )

          if (foundCommentIndex !== -1) {
            Vue.set(
              this.commentListByArticleId[foundCommentIndex],
              'replyErrorData',
              {}
            )
          } else if (createdComment.parentCommentId === null) {
            this.replyErrorData = {}
          }

          this.commentListByArticleId.push(createdComment)
        })
        .catch(error => {
          const errorMessage = error?.graphQLErrors[0]?.message

          if (errorMessage) {
            const parsedErrorObject = tryParseJSON(errorMessage)

            if (parsedErrorObject) {
              this.replyErrorData = {
                ...parsedErrorObject,
                commentId: reply.parentCommentId
              }

              const foundCommentIndex = this.commentListByArticleId.findIndex(
                comment => comment.commentId === reply.parentCommentId
              )

              if (!isNaN(Number(foundCommentIndex))) {
                Vue.set(
                  this.commentListByArticleId[foundCommentIndex],
                  'replyErrorData',
                  this.replyErrorData
                )
              }
            }
          }
        })
    },
    handleAddArticleLike() {
      if (this.isLike) {
        return
      }

      this.$apollo
        .mutate({
          mutation: INCREMENT_ARTICLE_LIKES_MUTATION,
          variables: {
            articleId: this.articleId
          }
        })
        .then(response => {
          const currentArticleLikes = response.data.incrementArticleLikes

          this.isLike = true
          this.articleById = {
            ...this.articleById,
            likes: currentArticleLikes
          }
        })
    },
    handleAddCommentLike(commentId) {
      this.$apollo
        .mutate({
          mutation: INCREMENT_COMMENT_LIKES_MUTATION,
          variables: {
            commentId
          }
        })
        .then(response => {
          const currentCommentLikes = response.data.incrementCommentLikes

          const foundCommentIndex = this.commentListByArticleId.findIndex(
            comment => comment.commentId === commentId
          )

          if (foundCommentIndex !== -1) {
            Vue.set(
              this.commentListByArticleId[foundCommentIndex],
              'likes',
              currentCommentLikes
            )
          }
        })
    },
    handleRemoveCommentLike(commentId) {
      this.$apollo
        .mutate({
          mutation: DECREMENT_COMMENT_LIKES_MUTATION,
          variables: {
            commentId
          }
        })
        .then(response => {
          const currentCommentLikes = response.data.decrementCommentLikes

          const foundCommentIndex = this.commentListByArticleId.findIndex(
            comment => comment.commentId === commentId
          )

          if (foundCommentIndex !== -1) {
            Vue.set(
              this.commentListByArticleId[foundCommentIndex],
              'likes',
              currentCommentLikes
            )
          }
        })
    }
  },
  watch: {
    articleById: function() {
      if (this.articleById === null) {
        window.location.pathname = `${routeList.error.base}/404`
      }
    }
  }
}
</script>
