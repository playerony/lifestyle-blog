<template>
  <div class="loading-page">
    <Loader />
  </div>
</template>

<script>
import Loader from '@component/common/Loader'

export default {
  name: 'page-loading',
  components: {
    Loader
  }
}
</script>
