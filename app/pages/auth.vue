<script setup lang="ts">      
  const router = useRouter()
  const isLoading = ref<boolean>(false)
  const user = useSupabaseUser()  
  const supabase = useSupabaseClient()
  const email = ref<string>('')
  const password = ref<string>('')
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
  const initAuth = async () => {
    try {
      isLoading.value = true
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value
      })
      if(data) router.push('/main')
      if(error) throw error
    } catch (error) {
      alert(error)
    } finally {
      isLoading.value = false
    }
  }
  const handleEmail = (value: string) => {   
    email.value = value    
  }
  const handlePassword = (value: string) => {
    password.value = value
  }  
  onMounted(async () => {
    // if(user) router.push('/main')    
    const { data } = await supabase.auth.getSession()
    if(data) console.log(data)
  })
</script> 
<template>
  <div class="background">
    <span class="title">Sign in to ConnectCALL u:{{ user }}</span>        
    <div style="display: flex; flex-direction: column; gap: 20px; width: 500px; margin: 20px;">
      <FormsEmailAndPassword @update:email="handleEmail" @update:password="handlePassword" />
      <div style="text-align: end;">
        <ButtonLinkButton title="Forgot Password?" @click="redirectToRecoverPage" :isLoading="isLoading" />
      </div>
      <ButtonRegularButton title="Sign In" @click="initAuth" :isLoading="isLoading" />
      <ButtonRegularButton title="Register" variant="secondary" @click="redirectToSignUp" backgroundColor="white" :isLoading="isLoading" />
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