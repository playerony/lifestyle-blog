<template>
  <fragment>
    <LoadingPage v-if="isLoading()" />
    <Article
      v-if="!isLoading()"
      :article="articleById"
      :handleReply="handleReply"
      :comments="commentListByArticleId"
    />
  </fragment>
</template>

<script>
import LoadingPage from './Loading'
import Article from '@component/Article'

import articleQuery from '@graphql/query/article'
import commentListQuery from '@graphql/query/commentList'
import { CREATE_COMMENT_MUTATION } from '@graphql/mutation/createComment'

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
    handleReply(reply) {
      this.$apollo
        .mutate({
          mutation: CREATE_COMMENT_MUTATION,
          variables: {
            comment: { ...reply, articleId: this.articleId }
          }
        })
        .then(response => {
          this.commentListByArticleId = [
            ...this.commentListByArticleId,
            response.data.createComment
          ]
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
