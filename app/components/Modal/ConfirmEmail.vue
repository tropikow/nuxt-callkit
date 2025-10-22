<script setup lang="ts">
  const router = useRouter()
  const redirectToApp = () => {
    router.push('/main')
  }
</script>
<template>
  <div class="confirmEmailContainer">
    <IconsCheckedGreen />
    <div class="confirmEmailContainerBody">
      <span class="title" style="font-size: 24px;">Email Confirmed!</span>
      <span class="label">Your account has been successfully activated. You can now start making calls.</span>
      <ButtonRegularButton title="Go to App" @click="redirectToApp" />    
    </div>
  </div>
</template>
<style scoped>
  .confirmEmailContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 350px;
    text-align: center;
    background-color: white;
    padding: 30px;
    border-radius: var(--borderRadius);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  }
  .confirmEmailContainerBody {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
    line-height: 20px;        
  }
</style>