<script setup lang="ts">
  const props = defineProps({
    type: String
  })
  const { type } = props;
  const returnTitle = (): string => {
    let title;
    switch(type) {
      case 'mute':
        title = 'Mute'
        break;
      case 'volume':
        title = 'Speaker'
        break;
      case 'end':
        title = 'End'
        break;
      default:
        title = 'Please add a type'
        break;
    }
    return title
  }
  const returnIcon = (): string => {
    let icon;
    switch(type) {
      case 'mute':
        icon = 'IconsMute'
        break;
      case 'volume':
        icon = 'IconsVolume'
        break;
      case 'end':
        icon = 'IconsPhoneEnd'
        break;
      default:
        icon = 'IconsQuestion'
        break;
    }
    return icon
  }
  const returnBackgroundColor = (): string => {
    let color;
    switch(type) {
      case 'end':
        color = '#ef4444'
        break;
      default:
        color = 'white'
        break;
    }
    return color
  }
</script>
<template>
  <div class="buttonCallAction">
    <div class="iconActionContainer" :style="{ 'background-color': returnBackgroundColor() }">
      <IconsMute v-if="returnIcon() === 'IconsMute'" />
      <IconsVolume v-if="returnIcon() === 'IconsVolume'" />
      <IconsPhoneEnd v-if="returnIcon() === 'IconsPhoneEnd'" />
      <IconsQuestion v-if="returnIcon() === 'IconsQuestion'" />
    </div>
    <span>{{ returnTitle() }}</span>
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
    padding: 20px;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;      
  }
</style>