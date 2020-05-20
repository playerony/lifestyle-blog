<template>
  <div class="claim">
    <Tooltip class="claim__image" title="Yes, this is my face">
      <img src="https://i.imgur.com/EyME0a9.png" />
    </Tooltip>
    <h1 class="claim__text">
      My friend who designed this website for me forced me to write something
      here. So with this <span class="claim__rainbow">blog</span>, I would like
      to share my experiences regarding
      <span class="claim__rainbow">meditation</span>,
      <span class="claim__rainbow">habits</span>, and the like. This is a kind
      of therapy for me to sort out what I know. I hope that maybe I can help
      someone with similar problems I encountered in my life.
      <span class="claim__rainbow">Hope you will enjoy</span>.
    </h1>
  </div>
</template>

<script>
import Tooltip from '../common/Tooltip'

export default {
  name: 'home-claim',
  components: {
    Tooltip
  }
}
</script>
