<script setup lang="ts">
  const props = defineProps({
    type: String,
    placeholder: String,
    icon: String,
    modelValue: String,
    ref: String
  })
  
  const emit = defineEmits(['update:modelValue', 'blur', 'focus'])
  
  const { type = 'email', placeholder = 'Email Address', icon = 'email', ref } = props;
  
  const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement
    emit('update:modelValue', target.value)
  }
</script>
<template>
  <div class="inputContainer">
    <IconsMail v-if="icon === 'email'"/>
    <input :value="modelValue" :ref="ref" :type="type" :placeholder="placeholder" style="font-size: small; background-color: transparent;" @input="handleInput" @blur="$emit('blur')" @focus="$emit('focus')" />
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