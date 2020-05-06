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
            v-show="isReplyVisible"
            :handleReply="handleReply"
            :key="'reply_' + comment.commentId"
            :parentCommentId="comment.commentId"
          />
        </transition>
      </div>
      <LeftArrowSVG
        :class="'content__expand-icon ' + arrowStyle"
        @click="isReplyFormVisible = !isReplyFormVisible"
      />
      <div class="content__likes">
        {{ comment.likes }}
        <button @click="handleAddCommentLike(comment.commentId)">
          ADD LIKE
        </button>
        <button @click="handleRemoveCommentLike(comment.commentId)">
          REMOVE LIKE
        </button>
      </div>
    </div>
    <Comment
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
      isReplyFormVisible: false
    }
  },
  components: {
    Reply,
    Comment,
    LeftArrowSVG
  },
  computed: {
    arrowStyle() {
      if (this.isReplyFormVisible) {
        return 'content__expand-icon--open'
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
    }
  }
}
</script>
