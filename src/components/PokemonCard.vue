<script setup>
import { computed, onMounted } from 'vue'
import { getImageSrc } from '../utils/image'

const props = defineProps({
  name: String,
  type: {
    type: Array,
    validator: (value) => (
      value.every(entry => typeof entry === 'string')
    )
  },
  image: String,
  base: {
    type: Object,
    validator: (value) => (
      Object.keys(value).every(key =>
        ['HP', 'Attack', 'Defense', 'Sp. Attack', 'Sp. Defense', 'Speed'].includes(key)
      )
    )
  },
  pokemon: Object
})

const pokemonSlug = computed(() => '/pokemons/' + props.name.split(' ').join('').toLowerCase())

const getImagePath = getImageSrc

onMounted(() => {
  console.log(props)
})
</script>

<style scoped lang="less">
  @import '../assets/styles/_pokemonCard.less';
</style>

<template>
  <div class="poke-card-container">
    <div class="poke-name">
      <router-link :to="pokemonSlug">{{ name }}</router-link>
    </div>
    <div class="poke-img-container">
      <img class="poke-img" :src="getImagePath(image)" />
    </div>
    <div class="poke-types">
      <span
        v-for="t in type"
        :key="t"
        :class="t.toLowerCase()"
        class="poke-type"
      >
        {{ t }}
      </span>
    </div>
  </div>
</template>
