<script setup lang="ts">  
  import { initAuth } from '#imports';
    
  const router = useRouter()
  const isLoading = ref<boolean>(false)
  const user = useSupabaseUser()  
  const redirectToRecoverPage = () => {
    isLoading.value = true
    router.push('/recoverPassword')
    isLoading.value = false
  }  
  const redirectToSignUp = () => {
    isLoading.value = true
    router.push('/signUp')
    isLoading.value = false
  }
  watch(user, u => {
    if (u) console.log('logueado', u.email)
    else console.log('sin sesión')
  })
</script> 
<template>
  <div class="background">
    <span class="title">Sign in to ConnectCALL</span>        
    <div style="display: flex; flex-direction: column; gap: 20px; width: 500px; margin: 20px;">
      <FormsEmailAndPassword />
      <div style="text-align: end;">
        <ButtonLinkButton title="Forgot Password?" @click="redirectToRecoverPage" :isLoading="isLoading" />
      </div>
      <ButtonRegularButton title="Sign In" @click="initAuth" />
      <ButtonRegularButton title="Register" @click="redirectToSignUp" backgroundColor="white" />
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
  .btnForgot {
    color: var(--colorBlue);
    cursor: pointer;
  }
  .title {
    font-weight: bold;
    font-size: x-large;
  }  
</style>