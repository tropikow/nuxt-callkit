<script setup lang="ts">
  const accountTimeSeconds = ref<number>(0)
  const accountTimeMinutes = ref<number>(0)
  onMounted(() => {
    setInterval(() => {      
      if(accountTimeSeconds.value < 59) {
        accountTimeSeconds.value++
      } else {
        accountTimeMinutes.value++
        accountTimeSeconds.value = 0
      }
    },1000)
  })
</script>
<template>
  <div class="inProgressCallBackground">
    <div class="modalContainer">
      <div class="iconContainer">
        <IconsPhone />
      </div>
      <div class="titleContainer">
        <span>Call in progress</span>
      </div>
      <div class="timeContainer">
        <span>{{ accountTimeMinutes }}:{{ accountTimeSeconds }}</span>
      </div>
      <div class="containerButtons">
        <div class="buttonContainer">
          <ButtonCallAction type="mute" />
        </div>
        <div class="buttonContainer">
          <ButtonCallAction type="volume" />
        </div>
        <div class="buttonContainer">
          <ButtonCallAction type="end" @click="$emit('endCall')" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .inProgressCallBackground {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100vh;    
  }
  .modalContainer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: fixed;
    border: 1px solid var(--colorGrayLight);
    border-radius: 20px;
    background-color: var(--colorWhite);
    width: 400px;
    height: 400px;
    z-index: 1000;    
    padding: 20px;    
  }
  .iconContainer {
    display: flex;
    justify-content: center;
    background-color: var(--colorBlueLight);
    padding: 20px;
    border-radius: 50%;
  }
  .titleContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  .titleContainer > span {
    font-size: 20px;
    font-weight: bold;
  }
  .timeContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  .timeContainer > span {
    font-size: xx-large;
    font-weight: lighter;
    color: var(--primaryText);
  }
  .containerButtons {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;    
  }
  .buttonContainer {
    display: flex;
    justify-content: center;
    align-items: center;     
  }
</style>  