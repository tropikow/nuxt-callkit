<script setup lang="ts">
  import type { Database } from '~~/types/supabase'
  import * as yup from 'yup'
  import { useField, useForm } from 'vee-validate'
  import { useAuthenticationStore } from '@/stores/authentication'
  import type { userAuthenticated } from '~/types/authentication'
  
  type UserInsert = Database['public']['Tables']['users']['Insert']

  const store = useAuthenticationStore()  
  const supabase = useSupabaseClient<Database>()
  const isLoading = ref<boolean>(false)
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
  const showSuccess = ref<boolean>(false)
  const onSubmit = handleSubmit(async (values) => {
    isLoading.value = true
    try {
      showAlert.value = false
      globalError.value = ''      
      const { data, error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: {
            full_name: values.name,            
          },
          emailRedirectTo: `${location.origin}/callback`
        }       
      })   
      if(data.user?.id) {
        await saveUserData(data.user.id)
      }
    } catch(error) {
      console.log(error)
    } finally {
      isLoading.value = false
    }
  })
  const saveUserData = async (uid: string) => {
    const { data, error } = await supabase
      .from('users')
      .insert([
        {
          name: name.value,
          email: email.value,
          phone_number: phoneNumber.value,
          uid: uid
        } as UserInsert
      ])
      .select()
      .single()  
    if(error) {
      alert(`An error has ocurred, please contact the administrator: ${error.code}`)
      return
    }
    if(data) {      
      showSuccess.value = true   
    }        
  }  
  onMounted(() => {
    name.value = 'Jovanny'
    email.value = 'jovannypersonal@gmail.com'
    password.value = 'Luhana160800'
    confirmPassword.value = 'Luhana160800'
    phoneNumber.value = '3157569760'
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
        <ButtonRegularButton title="Sign Up" type="submit" :isLoading="isLoading" />
      </form>      
      <div style="display: flex; gap: 5px;">
        <span class="label">Already have account?</span>
        <ButtonLinkButton title="Sign In" @click="() => $router.push('/auth')" />
      </div>
    </div>
    <ModalCheckEmail v-if="showSuccess" />
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