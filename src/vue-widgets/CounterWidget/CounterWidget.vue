<script setup>
import { ref } from 'vue'

const counter = ref(0)

function increment(size = 1) {
  counter.value += size
}

function decrement(size = 1) {
  counter.value -= size
}
</script>

<template>
  <div>
    <div>Counter: {{ counter }}</div>
    <div>
      <button @click="increment(1)">increment</button>
      <button @click="decrement(1)">decrement</button>
    </div>
  </div>
</template>
