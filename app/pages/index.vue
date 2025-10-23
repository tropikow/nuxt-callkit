<script setup lang="ts">
  const router = useRouter()
  const user = useSupabaseUser()    
  watch(user, (newUser) => {
    if (newUser) {      
      router.push('/main')
    } else {    
      router.push('/auth')
    }
  }, { immediate: true })
</script>
<template>
  <p>cargando</p>
</template>