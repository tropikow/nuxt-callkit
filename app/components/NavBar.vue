<script setup lang="ts">
  const router = useRouter()
  const redirectToSetting = () => {
    router.push('/setting')
  }
</script>
<template>
  <div class="container">
    <div class="left">      
      <span>CallConnect</span>
    </div>
    <div class="setting" @click="redirectToSetting">      
      <Icon />
    </div>
  </div>
</template>
<style scoped>
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;    
    width: 100%;
    padding: 10px;
    height: 60px;
    border-bottom: 1px solid var(--colorGrayLight);    
    overflow: hidden;
  }
  .left {    
    gap: 10px;
  }
  .left > span {
    font-weight: bold;
  }
  .setting {
    display: flex;
    justify-content: center;    
    align-content: center;
    margin: 0;    
    padding: 20px;    
  }
</style>