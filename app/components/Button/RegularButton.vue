<script setup lang="ts">
import type { PropType } from 'vue';

  
  type TypeButton = "button" | "submit" | "reset" | undefined
  const props = defineProps({
    title: {
      type: String,
      default: '',      
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value: string) => ['primary', 'secondary'].includes(value)
    },
    isLoading: {
      type: Boolean,
      default: false,      
    },        
    isEnabled: {
      type: Boolean,
      default: true
    },
    type: {
      type: String as PropType<TypeButton>,
      default: 'button'      
    }
  })
  const { isEnabled, title, variant, isLoading } = props;    
</script>
<template>    
  <button @click="$emit('click')" class="styleButton" :class="[
     variant === 'primary' ? 'stylePrimaryButton' : '',
     variant === 'secondary' ? 'styleSecondaryButton' : ''
  ]" :disabled="!isEnabled" :type="type" :style="isEnabled === false ? 'background-color: var(--colorGrayLight); cursor:not-allowed ' : ''" >
    <IconsLoader v-if="isLoading" />
    <span :style="variant === 'primary' ? 'color: white' : 'color: var(--primaryText)'">
      {{ title }}
    </span>
  </button>
</template>
<style scoped>
  button {    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 10px;
    border-radius: var(--borderRadius);
    width: 100%;
    cursor: pointer;
  }
  button > span {    
    color: white;    
  }
  .styleButton {
    border: none;
    outline: none;
  }
  .stylePrimaryButton {
    background-color: var(--colorBlue);    
  }
  .styleSecondaryButton {
    background-color: white;
    border: 1px solid var(--colorGrayLight);    
  }
</style>