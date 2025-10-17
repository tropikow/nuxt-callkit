<script setup lang="ts">
  import { destroyAuth } from '@/utils/manageAuth'
  const status = ref<string>('disconnected')  
  const initCall = () => {
    status.value = 'inProgress'
  }
  const endCall = () => {
    status.value = 'disconnected'
  }
</script>
<template>
  <div class="background">    
    <NavBar />
    <span class="status">disconnected</span>
    <div class="dialPad">
      <DialPad />
      <div class="buttonActionCallContainer">        
        <ButtonCall type="dial" @click="initCall" />
        <ButtonCall type="end" @click="endCall" />        
      </div>
    </div>
    <span class="buttonSignOut" @click="destroyAuth">Sign out</span>
    <ModalInProgressCall v-if="status === 'inProgress'" @endCall="endCall" />
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
  .status {
    color: var(--colorBlue);
  }
  .dialPad {
    width: 300px;
    margin-top: 50px;    
    margin-bottom: 50px;    
  }
  .buttonActionCallContainer {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;    
    width: 100%;
    gap: 10px;
  }  
  .buttonSignOut {
    color: var(--colorBlue);    
    cursor: pointer;
  }
</style>