<template>
  <div class="inputContainer">
    <IconsMail />
    <input type="email" placeholder="Email Address" style="font-size: small;" />
  </div>
</template>
<style scoped>
  .inputContainer {
    display: flex;
    gap: 10px;    
    border: 1px solid var(--colorGrayLight);
    border-radius: var(--borderRadius);
    overflow: hidden;
    padding: 10px 10px;
    width: 100%;
  }
  .inputContainer > input {
    border: none;
    width: 100%;
  }
</style>