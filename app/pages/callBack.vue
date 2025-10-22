<script setup lang="ts">
  const supabase = useSupabaseClient()  
  const route = useRoute()
  const router = useRouter()
  
  onMounted(async () => {    
    const token_hash = route.query.token as string | undefined
    const type = route.query.type as string | undefined
    let errorMessage: any = null
    if(token_hash && type) {
      if(type === 'signup') {
        const { error } = await supabase.auth.verifyOtp({
          token_hash: token_hash,
          type: type
        })
        if(error) errorMessage = error
      }
      if(type === 'recovery') {
        const { error } = await supabase.auth.verifyOtp({
          token_hash: token_hash,
          type: type
        })
        if(error) errorMessage = error
      }          
    }
    if(errorMessage) alert(errorMessage)
  })
</script>
<template>
  <div class="callBackBackground">    
    <ModalConfirmEmail />
  </div>
</template>
<style scoped>
  .callBackBackground {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;    
  }
</style>