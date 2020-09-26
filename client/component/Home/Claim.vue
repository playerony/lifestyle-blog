<template>
  <div class="claim">
    <Tooltip class="claim__image" title="To moja morda">
      <img :src="claimImage" />
    </Tooltip>
    <h1 class="claim__text">
      Mój kolega, który zaprojektował dla mnie tę stronę, zmusił mnie żebym
      tutaj coś napisał. Tak więc za pośrednictwem
      <span class="claim__rainbow">tego bloga</span>, chciałbym podzielić się
      swoimi doświadczeniami dotyczącymi
      <span class="claim__rainbow">medytacji</span>,
      <span class="claim__rainbow">budowy nawyków</span> i tym podobnych. Jest
      to dla mnie forma terapii mająca na celu
      <span class="claim__rainbow">uporządkowanie</span> tego co już wiem. Mam
      nadzieję, że uda mi się komuś pomóc.
    </h1>
  </div>
</template>

<script>
import Tooltip from '../common/Tooltip'

import keys from '@config/keys'

export default {
  name: 'home-claim',
  data() {
    return {
      claimImage: keys.claimImage
    }
  },
  components: {
    Tooltip
  }
}
</script>
