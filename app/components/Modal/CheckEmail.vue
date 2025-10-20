<template>
  <div class="backgroundCheckEmail">
    <div class="checkEmailContainer">
      <div class="checkEmailIcon">
        <IconsCheckedGreen />      
      </div>
      <span class="title">Check your email</span>
      <span class="label">We've sent a confirmation link to your email address. Please check your inbox and click the link to complete your registration.</span>
      <ButtonRegularButton title="Resend Email" />      
      <span class="label">Didn't receive the email? Check your spam folder or <ButtonLinkButton title="contact support" /></span>      
    </div>
  </div>
</template>
<style scoped>
  .backgroundCheckEmail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
  }
  .checkEmailContainer {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 20px;
    max-width: 400px;
    background-color: white;
    padding: 30px;
    border-radius: var(--borderRadius);
    line-height: 18px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  }
  .checkEmailIcon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>