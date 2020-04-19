<template>
  <fragment>
    <LoadingPage v-if="isLoading()" />
    <Article
      v-if="!isLoading()"
      :article="articleById"
      :handleReply="handleReply"
      :replyErrorData="replyErrorData"
      :comments="commentListByArticleId"
    />
  </fragment>
</template>

<script>
import Vue from 'vue'

import LoadingPage from './Loading'
import Article from '@component/Article'

import articleQuery from '@graphql/query/article'
import articleCommentListQuery from '@graphql/query/articleCommentList'
import { CREATE_COMMENT_MUTATION } from '@graphql/mutation/createComment'

import tryParseJSON from '@utility/tryParseJSON'

export default {
  name: 'ArticlePage',
  components: {
    Article,
    LoadingPage
  },
  data() {
    return {
      articleById: {},
      replyErrorData: {},
      commentListByArticleId: [],
      articleId: Number(this.$route.params.articleId)
    }
  },
  apollo: {
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
        this.$apollo.queries.commentListByArticleId.loading
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
