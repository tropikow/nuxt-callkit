<script setup lang="ts">
  const emit = defineEmits(['update:email','update:password'])
  const handleEmail = (event: Event) => {
    const target = event.target as HTMLFormElement
    emit('update:email', target.value)
  }
  const handlePassword = (event: Event) => {
    const target = event.target as HTMLFormElement
    emit('update:password', target.value)
  }
</script>
<template>
  <div class="loginContainer">
    <input type="email" placeholder="Email address" @input="handleEmail" />
    <Divider/>
    <input type="password" placeholder="Password" @input="handlePassword" />
  </div>
</template>
<style scoped>
  .loginContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid var(--colorGrayLight);
    border-radius: var(--borderRadius);
    overflow: hidden;
  }
  .loginContainer > input {
    border: none;
    outline: none;
    padding: 10px;
  }
</style>