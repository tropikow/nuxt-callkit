<template>
  <div class="container">
    <div class="left">      
      <span>CallConnect</span>
    </div>
    <div class="right">
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
  }
  .left {    
    gap: 10px;
  }
  .left > span {
    font-weight: bold;
  }
</style>