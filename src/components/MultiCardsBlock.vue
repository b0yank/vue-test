<script setup>
import { onMounted, ref } from 'vue'
import PokemonCard from './PokemonCard.vue'

const pokemons = ref(null)

onMounted(async () => {
  const response = await fetch('http://localhost:8081?count=12')
  pokemons.value = (await response.json())
})
</script>

<style scoped lang="less">
  @import '../assets/styles/_multiCardsBlock.less';
</style>

<template>
  <div v-if="pokemons" class="poke-cards">
    <PokemonCard
      v-for="pokemon of pokemons"
      :pokemon="pokemon"
      :key="pokemon.id"
      :name="pokemon.name"
      :type="pokemon.type"
      :image="pokemon.image"
      :base="pokemon.base"
    />
  </div>
</template>
