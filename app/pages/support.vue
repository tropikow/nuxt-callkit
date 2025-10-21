<script setup lang="ts">
  definePageMeta({
    layout: 'auth'
  })
</script>
<template>
  <div class="backgroundSupport">
    <div class="supportContainer">
      <span class="title">Contact Support</span>
      <span class="label" style="font-size: 16px; max-width: 530px; overflow-wrap: break-word; text-align: center;">We're here to hep. Choose a support option bellow to get started or fill out the form to send us a message directly</span>
      <div class="supportActionCardRow">
        <SupportActionCard type="submit" />
        <SupportActionCard type="email" />
      </div>
      <span class="title" style="font-size: 24px;">Submit a Request</span>
      <form @submit.prevent="" class="formSupportContainer">
        <div class="formSupportRow">
          <span class="label">Name</span>
          <div class="formSupportContainerField">
            <InputField icon="" />
          </div>
        </div>
        <div class="formSupportRow">
          <span class="label">Email</span>
          <div class="formSupportContainerField">
            <InputField icon="" />
          </div>
        </div>
        <div class="formSupportRow" style="grid-column: 1/3;">
          <span class="label">Subject</span>
          <div class="formSupportContainerField">
            <InputField icon="" />
          </div>
        </div>        
        <div class="formSupportRow" style="display: flex; flex-direction: column; grid-column: 1/3;">
          <span class="label">Message</span>
          <InputTextArea placeholder="Please describe your issue in detail." />         
        </div>
      </form>
      <div style="display: flex; justify-content: flex-end; align-items: flex-end; width: 100%;">       
        <div>
          <ButtonRegularButton title="Send Message" />
        </div> 
      </div>
    </div>
  </div>
</template>
<style scoped>
  .backgroundSupport {
    display: flex;
    flex-direction: column;    
    align-items: center;
    height: 100vh;
  }
  .supportContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 40px;
  }
  .supportActionCardRow {
    display: flex;
    gap: 20px;
    margin: 40px 0;    
  }
  .formSupportContainer {   
    display: grid; 
    grid-template-columns: repeat(2, 1fr);
    width: 800px;
    gap: 20px;        
  }
  .formSupportContainerField {      
    background-color: white;
    border-radius: var(--borderRadius);
  }
  .formSupportRow {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
</style>