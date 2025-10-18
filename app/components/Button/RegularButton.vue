<script setup lang="ts">
  const props = defineProps({
    title: String,
    backgroundColor: String
  })
  const { title, backgroundColor = 'blue' } = props;
</script>
<template>
  <button @click="$emit('click')" :style="backgroundColor === 'blue' ? 'background-color: var(--colorBlue); border: none; outline: none;' : 'background-color: white; border: 1px solid var(--colorGrayLight);'">
    <span :style="backgroundColor === 'blue' ? 'color: white' : 'color: var(--primaryText)'">
      {{ title }}
    </span>
  </button>
</template>
<style scoped>
  button {    
    padding: 10px;
    border-radius: var(--borderRadius);
    width: 100%;
    cursor: pointer;
  }
  button > span {    
    color: white;    
  }
</style>