<template>
  <div class="claim">
    <Tooltip class="claim__image" title="Yes, this is my face">
      <img src="https://i.imgur.com/EyME0a9.png" />
    </Tooltip>
    <h1 class="claim__text">
      My friend who designed it forced me to write here something. So with this
      blog, I wanna share my experience with
      <span class="claim__rainbow">meditation</span>,
      <span class="claim__rainbow">habits</span> and share things that changed
      totally my life. It is writing down my knowledge in order to systematize
      it and <span class="claim__rainbow">exchange knowledge</span>. I hope to
      help someone who need it.
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
