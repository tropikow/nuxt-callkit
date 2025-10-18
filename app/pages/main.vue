<script setup lang="ts">
  import { destroyAuth } from '@/utils/manageAuth'
  const status = ref<string>('disconnected')  
  const diadledNumber = ref<any[]>([])
  const initCall = () => {
    status.value = 'inProgress'
  }
  const endCall = () => {
    status.value = 'disconnected'
  }  
  const handleClick = (value: any) => {
    if(typeof value === 'string') {
      diadledNumber.value.push(value)
    }
  }
</script>
<template>
  <div class="background">    
    <NavBar />
    <span class="status">disconnected</span>
    <span style="color: var(--secondaryText); font-size: 18px; margin-top: 25px;">{{ diadledNumber.join(' ') }}</span>
    <div class="dialPad">
      <DialPad @click="handleClick" />
      <div class="buttonActionCallContainer">        
        <ButtonCall type="dial" @click="initCall" />
        <ButtonCall type="end" @click="endCall" />        
      </div>
    </div>    
    <ButtonLinkButton title="Sign Out" @click="destroyAuth" />
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
    margin-top: 25px;    
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