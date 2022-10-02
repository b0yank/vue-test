<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <MultiCardsBlock />
  </div>
</template>

<script>
// @ is an alias to /src
import MultiCardsBlock from '@/components/MultiCardsBlock.vue'

export default {
  name: 'HomeView',
  components: {
    MultiCardsBlock
  }
}
</script>
