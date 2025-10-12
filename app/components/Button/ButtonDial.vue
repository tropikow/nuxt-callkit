<script setup lang="ts">
  const props = defineProps({
    value: String
  })
  const { value } = props;
</script>
<template>
  <div class="buttonContainer">
    {{ value }}
  </div>
</template>
<style scoped>
  .buttonContainer {    
    text-align: center;
    background-color: var(--colorBlue);
    padding: 15px;
    border-radius: 25px;
    cursor: pointer;
  }
</style>