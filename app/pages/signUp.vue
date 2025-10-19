<script setup lang="ts">
  import { object, string } from 'yup'
  const email = ref<string>('')
  const password = ref<string>('')  
  const confirmPassword = ref<string>('')
  const tel = ref<string>('')
  const handleEmail = (value: any) => {
    email.value = value.target.value;
  }
  const handlePassword = (value: any) => {
    password.value = value.target.value
  }
  const handlePhoneNumber = (value: any) => {
    tel.value = value.target.value
  } 
  const handleConfirmPassword = (value: any) => {
    confirmPassword.value = value
  }
  const validatePassword = () => {
    if(password.value !== confirmPassword.value) {
      console.log('non')
    }
  }
  const fetchSignUp = async () => {

  }
  let userSchema = object({
    email: string().required(),
    phoneNumber: string().required()
  })
  let user = await userSchema.validate(await fetchSignUp)
</script>
<template>
  <div class="signUpBackground">
    <div class="signUpContainer">
      <h2 class="title">Create your Account</h2>
      <div class="signUpContain">
        <InputField icon="" :value="email" @input="handleEmail" />        
        <InputField type="password" placeholder="Password" icon="" @input="handlePassword" />
        <InputField type="password" placeholder="Confirm Password" icon="" @input="handleConfirmPassword" @blur="validatePassword" />
        <InputField type="tel" placeholder="Phone Number" icon="" @input="handlePhoneNumber" />
        <span class="label" style="line-height: 18px">Your information is used solely for security and authentication purposes within ConnectCALL. You have full control over your data, including the option to delete it any time.</span>
        <ButtonRegularButton title="Sign Up" @click="user" />
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