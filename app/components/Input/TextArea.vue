<script setup lang="ts">
  const props = defineProps({
    placeholder: String
  })
  const { placeholder } = props;
</script>
<template>
  <textarea :placeholder="placeholder" class="textAreaContainer" />
</template>
<style scoped>
  .textAreaContainer {
    border: 1px solid var(--colorGrayLight);
    border-radius: var(--borderRadius);
    padding: 10px;    
  }
</style>