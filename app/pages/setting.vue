<script setup lang="ts">
  import { destroyAuth } from '#imports';
  const deviceModel = ref<string>('')  
  onMounted(() => {
    if(navigator.userAgent.includes('Macintosh')) {
      deviceModel.value = 'macOS'
    } else if(navigator.userAgent.includes('ThinkPad')) {
      deviceModel.value = 'ThinkPad'
    } else if(navigator.userAgent.includes('MacBook')) {
      deviceModel.value = 'MacBook'
    } else if(navigator.userAgent.includes('Win')) {
      deviceModel.value = 'Windows'
    } else if(navigator.userAgent.includes('Android')) {
      deviceModel.value = 'Android'
    } else if(navigator.userAgent.includes('iOS')) {
      deviceModel.value = 'iPhone/iPad'
    }
  })
</script>
<template>
  <div class="settingsBackground">
    <div class="settingsBackgroundContainer">
      <h2 class="title">Settings</h2>
      <span class="label">Manage your preferences and account details</span>      
      <div class="accountCard">
        <div class="accountCardInfo">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
          <div>
            <span class="accountCardInfoName">John Doe</span>
            <span class="label">johndoe@getlavado.com</span>
          </div>
        </div>
        <span class="btnLogout" @click="destroyAuth">Log Out</span>        
      </div>      
      <div class="settingsSection">
        <span class="subTitle">General</span>
        <InputSettingInput iconProp="world" keyProp="Language">
          <span style="color: var(--secondaryText);">English</span>
        </InputSettingInput>
        <InputSettingInput iconProp="notification" keyProp="Enable call notifications">
          <InputToogleInput />
        </InputSettingInput>
        <InputSettingInput iconProp="launch" keyProp="Launch on system startup">
          <InputToogleInput />
        </InputSettingInput>
        <span class="subTitle">Audio & Video</span>
        <InputSettingInput iconProp="microphone" keyProp="Microphone">
          <span style="color: var(--secondaryText);">Default - {{ deviceModel }} Microphone</span>
        </InputSettingInput>
        <InputSettingInput iconProp="speaker" keyProp="speaker">
          <span style="color: var(--secondaryText);">Default - {{ deviceModel }} Speakers</span>
        </InputSettingInput>        
        <InputSettingInput iconProp="noise" keyProp="Noise Cancellation">
          <InputToogleInput />
        </InputSettingInput>
        <span class="subTitle">Privacy</span>
        <InputSettingInput iconProp="blocked" keyProp="Manage blocked numbers">                    
          <IconsArrowRight />
        </InputSettingInput>
        <InputSettingInput iconProp="security" keyProp="Privacy Policy">          
          <IconsArrowRight />
        </InputSettingInput>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .settingsBackground {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    overflow-y: auto;    
    padding: 20px;
  }
  .settingsBackgroundContainer {
    display: flex;
    flex-direction: column;
    width: 60%;    
    gap: 40px;
  }  
  .title {
    font-size: xx-large;
    font-weight: bold;
  }
  .subTitle {
    font-size: large;
    font-weight: bold;
  }
  .label {
    color: var(--secondaryText);
  }
  .accountCard {
    display: flex; 
    justify-content: space-between;
    align-items: center;    
  }  
  .accountCardInfo {
    display: flex;   
    align-items: center;
  }
  .accountCardInfo > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 20px;        
  }
  .accountCardInfo > img {    
    max-width: 120px;
    max-height: 120px;
  }
  .accountCardInfoName {
    font-size: large;
    font-weight: bold;
  }
  .settingsSection {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .btnLogout {
    display: inline-block;
    background-color: var(--colorBlueLight);
    color: var(--colorBlue);
    padding: 10px 20px;
    border-radius: var(--borderRadius);    
    cursor: pointer;
  }
</style>