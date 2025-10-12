<script setup lang="ts">
  const props = defineProps({
    type: String,
    placeholder: String
  })
  const { type, placeholder } = props;
</script>
<template>
  <div class="inputContainer">
    <input :type="type" :placeholder="placeholder" style="font-size:small; font-weight: 400;" />
  </div>
</template>
<style scoped>
  .inputContainer {
    margin: 0;
    width: 100%;    
  }
  .inputContainer > input {
    border: none;
    outline: none;
    margin: 0;
    width: 100%;    
    padding: 20px;        
  }
</style>