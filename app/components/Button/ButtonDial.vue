<script setup lang="ts">
  const props = defineProps({
    value: String
  })
  const { value } = props;
</script>
<template>
  <div class="buttonContainer" @click="$emit('click',value)">
    {{ value }}
  </div>
</template>
<style scoped>
  .buttonContainer {    
    text-align: center;
    background-color: var(--colorBlueLight);
    padding: 10px;
    border-radius: 25px;
    cursor: pointer;
  }
</style>