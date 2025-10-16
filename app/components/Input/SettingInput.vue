<script setup lang="ts">
  const props = defineProps({
    iconProp: String,
    keyProp: String,        
  })
  const { iconProp, keyProp } = props;  
  const renderIcon = (): string => {
    let icon;
    switch(iconProp) {
      case 'world':
        icon = 'world'
        break
      case 'notification':
        icon = 'notification'
        break
      case 'launch':
        icon = 'launch'
        break;
      case 'microphone':
        icon = 'microphone'
        break;
      case 'speaker':
        icon = 'speaker'
        break;
      case 'video-recorder':
        icon = 'video-recorder'
        break;
      case 'noise':
        icon = 'noise'
        break;
      case 'blocked':
        icon = 'blocked'
        break;
      case 'security':
        icon = 'security'
        break;
      default:
        icon = 'question'
        break
    }  
    return icon
  }
</script>
<template>
  <div class="inputContainer">
    <div class="inputContent">
      <div class="inputKey">
        <div class="iconContainer">          
          <IconsWorld v-if="renderIcon() === 'world'"/>
          <IconsNotification v-if="renderIcon() === 'notification'" />
          <IconsLaunch v-if="renderIcon() === 'launch'" />
          <IconsMicrophone v-if="renderIcon() === 'microphone'" />
          <IconsVolume v-if="renderIcon() === 'speaker'" />
          <IconsVideoRecorder v-if="renderIcon() === 'video-recorder'" />
          <IconsNoise v-if="renderIcon() === 'noise'" />
          <IconsSlashCircle v-if="renderIcon() === 'blocked'" />
          <IconsShield v-if="renderIcon() === 'security'" />
          <IconsQuestion v-if="renderIcon() === 'question'"/>
        </div>    
        <span>{{ keyProp }}</span>
      </div>
      <slot />
    </div>    
  </div>
</template>
<style scoped>
  .inputContainer {
    display: flex;    
    background-color: white;
    padding: 20px;
    border-radius: var(--borderRadius);
  }
  .inputContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;    
  }
  .inputKey {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .iconContainer {
    margin: 0;
    background-color: #f3f4f6;
    padding: 5px;
    border-radius: var(--borderRadius);
  }
</style>