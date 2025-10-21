<template>
  <div class="navBarAuthHeader">
    <div>
      Call
    </div>
    <div class="navBarAuthHeaderActionRight">
      <ButtonLinkButton title="Contact Support" />
      <ButtonRegularButton title="Log In" backgroundColor="white" />
      <ButtonRegularButton title="Sign Up" />
    </div>
  </div>
</template>
<style scoped>
  .navBarAuthHeader {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid var(--colorGrayLight);
    align-items: center;
    white-space: nowrap;    
  }
  .navBarAuthHeaderActionRight {
    display: flex;    
    align-items: center;
    gap: 10px;
    width: 300px;    
  }
</style>