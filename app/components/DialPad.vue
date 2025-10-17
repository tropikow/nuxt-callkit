<script setup lang="ts">
  const buttonList = ['1','2','3','4','5','6','7','8','9','+','0','#']    
</script>
<template>
  <div class="container">
    <div v-for="button in buttonList">
      <ButtonDial :value="button" @click="$emit('click', $event)" />
    </div>
  </div>  
</template>
<style scoped>
  .background {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 10px;
    gap: 20px;    
  }
</style>