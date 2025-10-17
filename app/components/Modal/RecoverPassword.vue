<script setup lang="ts">  
  const router = useRouter()
  const redirectToAuth = () => {
    router.push('/auth')
  }
</script>

<template>
  <div class="recoverPasswordContainer">
    <div class="modalContainer">
      <h2 class="title">Forgot password?</h2>
      <span class="label">Enter your email address and we'll send you a link to reset your password</span>       
       <InputUniqueInput />
       <ButtonRegularButton title="Send Reset Link" />
       <span class="btnBackToLogin" @click="redirectToAuth">Back to Login</span>
    </div>
  </div>
</template>
<style scoped>
  .recoverPasswordContainer {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
  }
  .title {
    font-size: x-large;
    font-weight: bold;
  }
  .label {
    font-size: small;
    color: var(--secondaryText);    
  }
  .modalContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
    background-color: white;
    border-radius: var(--borderRadius);
    padding: 40px;
    width: 400px;
    text-align: center;        
  }
  .btnBackToLogin {
    color: var(--colorBlue);
    cursor: pointer;
  }
</style>