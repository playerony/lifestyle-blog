<template>
  <Container>
    <div class="error-page">
      <RobotSVG class="error-page__icon" />
      <h1 class="error-page__code">{{ code }}</h1>
      <label class="error-page__description">{{ errorMessage }}</label>
      <Button :onClick="handleRefreshClick">Refresh</Button>
    </div>
    <VueHeadful
      :title="errorMessage + ' | The Blog of Author Paweł Wojtasiński'"
    />
  </Container>
</template>

<script>
import VueHeadful from 'vue-headful'

import Button from '@component/generic/Button'
import Container from '@component/common/Container'

import routeList from '@config/routeList'

import RobotSVG from '@asset/svg/robot.svg'

export default {
  name: 'page-error',
  data() {
    return {
      code: Number(this.$route.params?.code)
    }
  },
  components: {
    Button,
    RobotSVG,
    Container,
    VueHeadful
  },
  computed: {
    errorMessage() {
      const errorMessages = {
        404: 'Not found.',
        400: 'Bad request.',
        500: 'Internal Server Error.'
      }

      return errorMessages[this.code] || 'An error occured.'
    }
  },
  methods: {
    handleRefreshClick() {
      this.$router.push(routeList.base)
    }
  }
}
</script>
