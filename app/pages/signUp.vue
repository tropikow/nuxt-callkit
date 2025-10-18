<script setup lang="ts">
  const email = ref<string>('')
  const password = ref<string>('')
</script>
<template>
  <div class="signUpBackground">
    <div class="signUpContainer">
      <h2 class="title">Create your Account</h2>
      <div class="signUpContain">
        <InputField icon="" />
        <InputField type="password" placeholder="Password" icon="" />
        <InputField type="password" placeholder="Confirm Password" icon="" />
        <InputField type="tel" placeholder="Phone Number" icon="" />
        <span class="label" style="line-height: 18px">Your information is used solely for security and authentication purposes within ConnectCALL. You have full control over your data, including the option to delete it any time.</span>
        <ButtonRegularButton title="Sign Up" />
      </div>
      <div style="display: flex; gap: 5px;">
        <span class="label">Already have account?</span>
        <ButtonLinkButton title="Sign In" @click="() => $router.push('/auth')" />
      </div>
    </div>
  </div>
</template>
<style scoped>
  .signUpBackground {
    width: 100%;
    height: 100vh;       
  }
  .signUpContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;       
    height: inherit;    
  }
  .signUpContain {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    gap: 20px;
    margin: 40px;
    text-align: center;
  }
</style>