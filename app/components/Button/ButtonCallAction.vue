<template>
  <div class="buttonCallAction">
    <div class="iconActionContainer">
      <IconsMute />        
    </div>
    <span>Mute</span>
  </div>
</template>
<style scoped>
  .buttonCallAction {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;    
  }
  .buttonCallAction > span {
    color: var(--secondaryText);
    font-weight: 900px;
  }
  .iconActionContainer {    
    border: none;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.18);
    padding: 10px;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;      
  }
</style>