<template>
  <div class="modalContainer">
    <div class="iconContainer">
      <IconsPhone />
    </div>
    <div>

    </div>
    <span>Call in progress</span>
    <span>00:05</span>
    <ButtonCallAction />    
  </div>
</template>
<style scoped>
  .modalContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    border: 0.5px solid var(--colorGrayLight);
    border-radius: 20px;
    background-color: var(--colorWhite);
  }
  .iconContainer {
    display: flex;
    justify-content: center;
    background-color: var(--colorBlueLight);
    padding: 20px;
    border-radius: 50%;
  }
</style>