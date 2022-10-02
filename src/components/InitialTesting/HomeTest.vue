<template>
  <div class="container">
    <input type="text" v-model="name" />
    <input type="password" v-model="password" />

    <div>Checked names: {{ checkedNames }}</div>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>

    <div style="{ display: flex }">
      <div>Picked: {{ picked }}</div>
      <input type="radio" id="one" value="One" v-model="picked" />
      <label for="one">One</label>
      <input type="radio" id="two" value="Two" v-model="picked" />
      <label for="two">Two</label>
    </div>

    <div>Selected: {{ selected }}</div>
    <!-- <select v-model="selected">
      <option
        v-for="(opt, idx) in selectOptions" :key="idx"
        :value="opt.value"
      >
        {{ opt.text }}
      </option>
    </select> -->
    <select v-model="selected">
      <option
        v-for="(opt, idx) in selectOptions" :key="idx"
        :value="{ name: opt.value }"
      >
        {{ opt.text }}
      </option>
    </select>

    <div>Lazy input:</div>
    <div>Value: {{ lazy }}</div>
    <input type="text" v-model.lazy="lazy" />
  </div>

  <HomeChildTest v-model="childTestTitle" :title="childTestTitle" />
</template>

<script setup>
import { reactive, ref, watch } from 'vue'
import HomeChildTest from './HomeChildTest.vue'

const name = ref()
const password = ref()
const checkedNames = ref([])
const picked = ref([])
const lazy = ref('')

const selectOptions = ref([
  { text: 'One', value: 'A' },
  { text: 'Two', value: 'B' },
  { text: 'Three', value: 'C' }
])

const selected = ref([])

const obj = reactive({ count: 0 })

watch(() => obj.count, (count) => {
  console.log(`count is: ${count}`)
})

const childTestTitle = ref('Init child')

</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
