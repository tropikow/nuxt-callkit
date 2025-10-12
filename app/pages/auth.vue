<template>
  <div class="background">
    <form class="loginContainer">
      <input type="email" placeholder="Email address" />
      <input type="password" placeholder="Password" />
    </form>
  </div>
</template>
<style>
  .background {
    display: flex;
    justify-content: center;    
    align-items: center;
    width: 100%;
    height: 100%;    
  }
  .loginContainer {
    border: 1px solid var(--colorGrayLight);
    border-radius: var(--borderRadius);            
    overflow: hidden;    
  }
  .loginContainer>input {
    width: 100%;
    height: 100%;    
  }
</style>