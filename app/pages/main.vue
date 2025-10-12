<template>
  <div class="background">
    <span class="status">disconnected</span>
    <div class="dialPad">
      <DialPad />
      <div class="buttonActionCallContainer">        
        <ButtonCall type="dial" />
        <ButtonCall type="end" />        
      </div>
    </div>
    <span class="buttonSignOut">Sign out</span>
  </div>
</template>
<style scoped>
  .background {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;    
  }
  .status {
    color: var(--buttonColor);
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
    color: var(--buttonColor);    
  }
</style>