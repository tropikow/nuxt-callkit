<template>
  <div class="loginContainer">
    <input type="email" placeholder="Email address" />
    <Divider/>
    <input type="password" placeholder="Password" />
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