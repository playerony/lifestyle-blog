<template>
  <fragment>
    <LoadingPage v-if="isLoading()" />
    <Article
      v-if="!isLoading()"
      :article="articleById"
      :handleReply="handleReply"
      :replyErrorData="getReplyErrorData()"
      :comments="commentListByArticleId"
    />
  </fragment>
</template>

<script>
import Vue from 'vue'

import LoadingPage from './Loading'
import Article from '@component/Article'

import articleQuery from '@graphql/query/article'
import commentListQuery from '@graphql/query/commentList'
import { CREATE_COMMENT_MUTATION } from '@graphql/mutation/createComment'

import tryParseJSON from '@utility/tryParseJSON'

const initialErrorData = { articleId: [], content: [], creator: [] }

export default {
  name: 'ArticlePage',
  components: {
    Article,
    LoadingPage
  },
  data() {
    return {
      articleById: {},
      commentListByArticleId: [],
      replyErrorData: initialErrorData,
      articleId: Number(this.$route.params.articleId)
    }
  },
  methods: {
    isLoading() {
      return (
        this.$apollo.queries.articleById.loading ||
        this.$apollo.queries.commentListByArticleId.loading
      )
    },
    getReplyErrorData() {
      return this.replyErrorData
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

          const commentsWithErrorData = this.commentListByArticleId.findIndex(
            comment =>
              Boolean(comment.replyErrorData) &&
              comment.commentId === createdComment.parentCommentId
          )

          this.commentListByArticleId = [
            ...this.commentListByArticleId,
            createdComment
          ]

          if (commentsWithErrorData !== -1) {
            Vue.set(
              this.commentListByArticleId[commentsWithErrorData],
              'replyErrorData',
              undefined
            )
          }
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
                comment => comment.commentId === this.replyErrorData?.commentId
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
      ...commentListQuery,
      variables() {
        return {
          articleId: this.articleId
        }
      }
    }
  }
}
</script>
