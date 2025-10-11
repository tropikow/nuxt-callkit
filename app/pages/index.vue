<script setup lang="ts">
  const isAuthenticated = ref<boolean>(false)
  const router = useRouter()
  if(isAuthenticated.value) {
    router.push('/main')
  } else {
    router.push('/auth')
  }
</script>