<template>
  <div class="comment">
    <div class="comment__content">
      <header class="content__header">
        <h1>{{ comment.creator }}</h1>
        <p>{{ getCommentDate() }}</p>
      </header>
      <label>{{ comment.content }}</label>
      <transition
        name="accordion"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:before-leave="beforeLeave"
        v-on:leave="leave"
      >
        <Reply
          v-show="isReplyVisible"
          :handleReply="handleReply"
          :errorData="getErrorData()"
          :key="replyId"
          :parentCommentId="comment.commentId"
        />
      </transition>
      <LeftArrowSVG
        :class="'content__expand-icon ' + getArrowStyle"
        @click="isReplyVisible = !isReplyVisible"
      />
    </div>
    <Comment
      v-for="comment in comment.comments"
      :key="comment.commentId"
      :comment="comment"
      :handleReply="handleReply"
    />
  </div>
</template>

<script>
import Reply from './Reply'
import Comment from './Comment'

import differenceBetweenDates from '@utility/differenceBetweenDates'

import LeftArrowSVG from '@asset/svg/left-arrow.svg'

export default {
  name: 'Comment',
  props: {
    comment: { type: Object, required: true },
    handleReply: { type: Function, required: true }
  },
  data() {
    return {
      isReplyVisible: false
    }
  },
  components: {
    Reply,
    Comment,
    LeftArrowSVG
  },
  computed: {
    getArrowStyle() {
      if (this.isReplyVisible) {
        return 'content__expand-icon--open'
      }

      return ''
    }
  },
  methods: {
    getErrorData() {
      return this.comment.replyErrorData
    },
    getCommentDate() {
      return differenceBetweenDates(this.comment.createdAt)
    },
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
