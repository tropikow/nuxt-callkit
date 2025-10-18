<script setup lang="ts">
  const props = defineProps({
    title: String
  })
  const { title } = props;
</script>
<template>
  <div class="containerLinkButton" @click="$emit('click')">
    {{ title }}    
  </div>
</template>
<style scoped>
  .containerLinkButton {
    font-size: small;
    color: var(--colorBlue);
    cursor: pointer;
  }
</style>