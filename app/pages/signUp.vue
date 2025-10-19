<script setup lang="ts">
  import * as yup from 'yup'
  import { useField, useForm } from 'vee-validate'
  const validationSchema = yup.object({
    name: yup.string().required('Name is required').min(2, 'Name mus be at least 2 characters'),
    email: yup.string().required('Email is required').email('Please enter a valid email address'),
    password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters').max(20, 'Password must be less than 20 characters'),
    confirmPassword: yup.string().required('Please confirm your password').oneOf([yup.ref('password')], 'Password must match'),
    phoneNumber: yup.string().required('Phone number is required').matches(/^[0-9+\-\s()]+$/, 'Please enter a valid phone number')
  })  
  const { handleSubmit, errors } = useForm({
    validationSchema
  })
  const { value: name, errorMessage: nameError } = useField<string>('name')
  const { value: email, errorMessage: emailError } = useField<string>('email')
  const { value: password, errorMessage: passwordError } = useField<string>('password')
  const { value: confirmPassword, errorMessage: confirmPasswordError } = useField<string>('confirmPassword')
  const { value: phoneNumber, errorMessage: phoneNumberError } = useField<string>('phoneNumber')
  const globalError = ref<string>('')
  const showAlert = ref<boolean>(false)
  const onSubmit = handleSubmit(async (values) => {
    try {
      showAlert.value = false
      globalError.value = ''
      console.log(values)
    } catch(error) {
      console.log(error)
    }
  })
</script>
<template>
  <div class="signUpBackground">
    <div class="signUpContainer">
      <h2 class="title">Create your Account</h2>      
      <form @submit.prevent="onSubmit" class="signUpContain">        
        <div>
          <InputField 
            v-model="name" 
            type="text" 
            placeholder="First name" 
            icon="" 
          />
          <span v-if="nameError" class="error-message">{{ nameError }}</span>
        </div>        
        <div>
          <InputField 
            v-model="email" 
            type="email" 
            placeholder="Email Address" 
            icon="" 
          />
          <span v-if="emailError" class="error-message">{{ emailError }}</span>
        </div>
        <div>
          <InputField 
            v-model="password" 
            type="password" 
            placeholder="Password" 
            icon="" 
          />
          <span v-if="passwordError" class="error-message">{{ passwordError }}</span>
        </div>
        <div>
          <InputField 
            v-model="confirmPassword" 
            type="password" 
            placeholder="Confirm Password" 
            icon="" 
          />
          <span v-if="confirmPasswordError" class="error-message">{{ confirmPasswordError }}</span>
        </div>
        <div>
          <InputField 
            v-model="phoneNumber" 
            type="tel" 
            placeholder="Phone Number" 
            icon="" 
          />
          <span v-if="phoneNumberError" class="error-message">{{ phoneNumberError }}</span>
        </div>
        <span class="label" style="line-height: 18px">
          Your information is used solely for security and authentication purposes within ConnectCALL. 
          You have full control over your data, including the option to delete it any time.
        </span>
        <div v-if="showAlert" class="global-error">
          {{ globalError }}
        </div>
        <ButtonRegularButton title="Sign Up" type="submit" />
      </form>
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
  
  .error-message {
    color: #e74c3c;
    font-size: 12px;
    margin-top: 5px;
    display: block;
    text-align: left;
  }
  
  .global-error {
    background-color: #f8d7da;
    color: #721c24;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #f5c6cb;
    font-size: 14px;
  }
</style>