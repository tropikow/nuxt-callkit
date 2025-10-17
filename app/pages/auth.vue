<script setup lang="ts">
  import { initAuth } from '#imports';
  const router = useRouter()
  const redirectToRecoverPage = () => {
    router.push('/recoverPassword')
  }
</script>
<template>
  <div class="background">
    <span class="title">Sign in to ConnectCALL</span>
    <div class="loginContainer">
      <div class="inputsContainer">
        <InputRegularInput type="email" placeholder="Email address" />
        <Divider />
        <InputRegularInput type="password" placeholder="Password" />
      </div>
      <span class="btnForgot" @click="redirectToRecoverPage">Forgot password?</span>      
      <ButtonRegularButton title="Sign in" @click="initAuth" />
    </div>
  </div>
</template>
<style scoped>
  .background {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;        
  }
  .loginContainer {
    display: flex;
    flex-direction: column;    
    justify-content: end;
    align-items: end;
    margin: 20px;
    gap: 20px;
  }
  .inputsContainer {
    border: 1px solid var(--colorGrayLight);
    border-radius: var(--borderRadius);    
    overflow: hidden;   
    width: 500px;
    height: auto;
  }
  .btnForgot {
    color: var(--colorBlue);
    cursor: pointer;
  }
  .title {
    font-weight: bold;
    font-size: x-large;
  }  
</style>