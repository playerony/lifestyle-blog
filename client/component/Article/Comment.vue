<template>
  <div class="comment">
    <div class="comment__content">
      <header class="content__header">
        <h1>{{ comment.creator }}</h1>
        <p>{{ formattedDate }}</p>
      </header>
      <label>{{ comment.content }}</label>
      <div class="content__reply">
        <transition
          name="accordion"
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
          v-on:before-leave="beforeLeave"
          v-on:leave="leave"
        >
          <Reply
            :errorData="errorData"
            :handleReply="handleReply"
            v-show="isReplyFormVisible"
            :key="'reply_' + comment.commentId"
            :parentCommentId="comment.commentId"
          />
        </transition>
      </div>
      <footer class="content__footer">
        <LeftArrowSVG
          :class="'footer__expand-icon ' + arrowStyle"
          @click="isReplyFormVisible = !isReplyFormVisible"
        />
        <div class="footer__likes">
          <LeftArrowSVG
            :class="'likes__like-icon ' + likeArrowStyle"
            @click="handleLike"
          />
          <p>{{ comment.likes }}</p>
          <LeftArrowSVG
            :class="'likes__dislike-icon ' + dislikeArrowStyle"
            @click="handleDislike"
          />
        </div>
      </footer>
    </div>
    <article-comment
      :comment="comment"
      :key="comment.commentId"
      :handleReply="handleReply"
      v-for="comment in comment.comments"
      :handleLikeComment="handleLikeComment"
      :handleDislikeComment="handleDislikeComment"
    />
  </div>
</template>

<script>
import Reply from './Reply'
import Comment from './Comment'

import differenceBetweenDates from '@utility/differenceBetweenDates'

import LeftArrowSVG from '@asset/svg/left-arrow.svg'

export default {
  name: 'article-comment',
  props: {
    comment: { type: Object, required: true },
    handleReply: { type: Function, required: true },
    handleLikeComment: { type: Function, required: true },
    handleDislikeComment: { type: Function, required: true }
  },
  data() {
    return {
      isLiked: false,
      isDisliked: false,
      isReplyFormVisible: false
    }
  },
  components: {
    Reply,
    LeftArrowSVG,
    'article-comment': Comment
  },
  computed: {
    arrowStyle() {
      if (this.isReplyFormVisible) {
        return 'footer__expand-icon--open'
      }

      return ''
    },
    likeArrowStyle() {
      if (this.isDisliked) {
        return 'likes__icon--disable'
      }

      if (this.isLiked) {
        return 'likes__icon--success'
      }

      return ''
    },
    dislikeArrowStyle() {
      if (this.isLiked) {
        return 'likes__icon--disable'
      }

      if (this.isDisliked) {
        return 'likes__icon--success'
      }

      return ''
    },
    formattedDate() {
      return differenceBetweenDates(this.comment.createdAt)
    },
    errorData() {
      return this.comment.replyErrorData
    }
  },
  methods: {
    beforeEnter: function(el) {
      el.style.height = '0'
    },
    enter: function(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    beforeLeave: function(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    leave: function(el) {
      el.style.height = '0'
    },
    handleLike() {
      if (this.isLiked || this.isDisliked) {
        return
      }

      this.handleLikeComment(this.comment.commentId)
    },
    handleDislike() {
      if (this.isLiked || this.isDisliked) {
        return
      }

      this.handleDislikeComment(this.comment.commentId)
    }
  },
  watch: {
    comment: function(newVal, oldVal) {
      if (newVal.likes !== oldVal.likes) {
        this.isLiked = newVal.likes > oldVal.likes
        this.isDisliked = newVal.likes < oldVal.likes
      }
    }
  }
}
</script>
