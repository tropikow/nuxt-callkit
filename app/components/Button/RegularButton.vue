<script setup lang="ts">
  const props = defineProps({
    title: String
  })
  const { title } = props;
</script>
<template>
  <button>
    <span>
      {{ title }}
    </span>
  </button>
</template>
<style scoped>
  button {
    border: none;
    outline: none;
    background-color: var(--buttonColor);
    padding: 20px;
    border-radius: var(--borderRadius);
    width: 100%;
    cursor: pointer;
  }
  button > span {    
    color: white;    
  }
</style>