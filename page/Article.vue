<template>
  <div>
    <LoadingPage v-if="isLoading()" />
    <Article
      v-if="!isLoading()"
      :article="articleById"
      :handleReply="handleReply"
      :details="getArticleDetails()"
      :replyErrorData="replyErrorData"
      :comments="commentListByArticleId"
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

import tryParseJSON from '@utility/tryParseJSON'

import articleTransformator from '@transformator/articleTransformator'

export default {
  name: 'ArticlePage',
  components: {
    Article,
    LoadingPage
  },
  data() {
    return {
      visitorList: [],
      articleById: {},
      replyErrorData: {},
      commentListByArticleId: [],
      articleId: Number(this.$route.params.articleId)
    }
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

          const commentWithErrorData = this.commentListByArticleId.findIndex(
            comment =>
              Boolean(comment.replyErrorData) &&
              comment.commentId === createdComment.parentCommentId
          )

          if (commentWithErrorData !== -1) {
            Vue.set(
              this.commentListByArticleId[commentWithErrorData],
              'replyErrorData',
              {}
            )
          } else if (createdComment.parentCommentId === null) {
            this.replyErrorData = {}
          }

          this.commentListByArticleId = [
            ...this.commentListByArticleId,
            createdComment
          ]
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

              const commentIndex = this.commentListByArticleId.findIndex(
                comment => comment.commentId === reply.parentCommentId
              )

              if (commentIndex) {
                Vue.set(
                  this.commentListByArticleId[commentIndex],
                  'replyErrorData',
                  this.replyErrorData
                )
              }
            }
          }
        })
    }
  }
}
</script>
