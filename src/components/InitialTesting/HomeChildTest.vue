<template>
  <div>
    {{ title }}
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="Test children"
    />
  </div>
</template>

<script setup>
defineProps(['modelValue', 'title'])
</script>
