<script setup lang="ts">
  const props = defineProps({
    type: String
  })
  const { type } = props
  const dispatchTitle = () => {
    let dispatch;
    switch(type) {
      case 'email': 
        dispatch = 'Email Us Directly'
        break
      case 'submit': 
        dispatch = 'Submit a Request'
        break      
    }    
    return dispatch
  }
  const dispatchLabel = () => {
    let dispath
    switch(type) {
      case 'email':
        dispath = 'support@webcall.com'
        break
      case 'submit':
        dispath = 'Fill out a form to get support'
        break
    }
    return dispath
  }
</script>
<template>
  <div class="actionCardContainer">
    <IconsMail currentColor="#3b82f6" currentSize="40px" v-if="type === 'email'" />
    <IconsWrite currentColor="#3b82f6" currentSize="40px" v-if="type === 'submit'" />
    <div style="display:flex; flex-direction: column;  margin-top: 15px; gap: 10px; text-align: center;">
      <span class="title" style="font-size: 16px;">{{ dispatchTitle() }}</span>
      <span class="label" style="font-size: 14px;">{{ dispatchLabel() }}</span>
    </div>    
  </div>
</template>
<style scoped>  
</style>
<style scoped>
  .actionCardContainer {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--colorGrayLight);
    background-color: white;
    padding: 30px;
    border-radius: var(--borderRadius);    
    align-items: center;
    cursor: pointer;
    max-width: 200px;
  }
</style>