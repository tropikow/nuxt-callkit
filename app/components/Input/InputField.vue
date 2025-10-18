<script setup lang="ts">
  const props = defineProps({
    type: String,
    placeholder: String,
    icon: String,
    value: String
  })
  const { type = 'email', placeholder = 'Email Address', icon = 'email' } = props;    
</script>
<template>
  <div class="inputContainer">
    <IconsMail v-if="icon === 'email'"/>
    <input :value="value" :type="type" :placeholder="placeholder" style="font-size: small; background-color: transparent;" @input="$emit('input', $event)" />
  </div>
</template>
<style scoped>
  .inputContainer {
    display: flex;
    gap: 10px;     
    border: 1px solid var(--colorGrayLight);
    border-radius: var(--borderRadius);
    overflow: hidden;
    padding: 10px;
    width: 100%;
  }
  .inputContainer > input {
    border: none;
    width: 100%;
  }
</style>