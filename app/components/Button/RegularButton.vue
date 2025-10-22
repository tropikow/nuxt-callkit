<script setup lang="ts">
  const props = defineProps({
    title: String,
    backgroundColor: String,
    isLoading: Boolean
  })
  const { title, backgroundColor = 'blue', isLoading } = props;  
</script>
<template>
  <button @click="$emit('click')" :style="backgroundColor === 'blue' ? 'background-color: var(--colorBlue); border: none; outline: none;' : 'background-color: white; border: 1px solid var(--colorGrayLight);'" :disabled="isLoading" >
    <IconsLoader v-if="isLoading" />    
    <span :style="backgroundColor === 'blue' ? 'color: white' : 'color: var(--primaryText)'">
      {{ title }}
    </span>
  </button>
</template>
<style scoped>
  button {    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 10px;
    border-radius: var(--borderRadius);
    width: 100%;
    cursor: pointer;
  }
  button > span {    
    color: white;    
  }
</style>