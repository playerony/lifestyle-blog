<template>
  <Container>
    <div class="error-page">
      <RobotSVG class="error-page__icon" />
      <h1 class="error-page__code">{{ code }}</h1>
      <label class="error-page__description">{{ errorMessage }}</label>
      <div style="position: relative; width: 40%;">
        <Button :onClick="handleRefreshClick">Odśwież</Button>
      </div>
    </div>
    <VueHeadful :title="errorMessage + ' | Paweł Wojtasiński Blog'" />
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
        400: 'Zła prośba',
        404: 'Nie znaleziono',
        500: 'Wewnętrzny błąd serwera'
      }

      return errorMessages[this.code] || 'Wystąpił błąd.'
    }
  },
  methods: {
    handleRefreshClick() {
      this.$router.push(routeList.base)
    }
  }
}
</script>
