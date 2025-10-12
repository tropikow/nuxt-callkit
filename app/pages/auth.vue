<template>
  <div class="background">
    <h2>Sign in to ConnectCALL</h2>
    <form class="loginContainer">
      <input type="email" placeholder="Email address" />
      <hr />
      <input type="password" placeholder="Password" />
    </form>
  </div>
</template>
<style scoped>
  .background {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;    
  }
  .loginContainer {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--colorGrayLight);
    border-radius: var(--borderRadius);            
    overflow: hidden;    
    width: 500px;
    height: 100px;    
  }    
  .loginContainer>input {
    width: 100%;
    height: 100%;
    border: none;
    font-size: 16px;    
    background-color: transparent;
  }
  hr {    
    border: 1px solid var(--colorGrayLight);
    margin: 0;
    flex-shrink: 0;
  }
  h2 {
    font-weight: bold;
  }
</style>