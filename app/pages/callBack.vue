<script setup lang="ts">
  const supabase = useSupabaseClient()
  const route = useRoute()
  const router = useRouter()
  
  onMounted(async () => {
    const code = route.query.code as string | undefined
    const token_hash = route.query.token_hash as string | undefined
    let error: any = null
    if(code) {
      ({ error } = await supabase.auth.exchangeCodeForSession(code))      
    } else if(token_hash) {
      ({ error } = await supabase.auth.exchangeCodeForSession(token_hash))
    } else {
      console.log('primer error:', error)
      // return router.replace('/auth')
    }

    if(error) {
      console.log('segundo error:', error)
      // return router.replace('/auth')
    }
    router.replace('/main')    
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