<script setup lang="ts">
  const props = defineProps({
    type: String
  })
  const { type } = props;
  const returnTitle = (): string => {
    let title;
    switch(type) {
      case 'dial':
        title = 'Dial'
        break;
      default: 
      title = 'End'
      break;
    }
    return title
  }
  const returnBackgroundColor = (): string => {
    let color;
    switch(type) {
      case 'dial':
        color = '#22c55e'
        break;
      default:
        color = '#ef4444'
        break;
    }
    return color
  }
</script>
<template>
  <div class="container" :style="{ 'background-color': returnBackgroundColor() }">    
    <span>
      {{ returnTitle() }}
    </span>
  </div> 
</template>
<style scoped>
  .container {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    text-align: center;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.18);
  }
  .container > span {
    color: white;
  }
</style>