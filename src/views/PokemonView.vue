<template>
  <div></div>
</template>

<script setup>
// @ is an alias to /src
import { REST_API } from '@/utils/constants'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const pokemon = ref(null)

onMounted(async () => {
  const response = await fetch(`${REST_API}/pokemon/${route.params.pokename}`)
  pokemon.value = (await response.json())
})
</script>
