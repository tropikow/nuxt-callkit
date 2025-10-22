<template>
  <svg
    class="loader-apple-spinner"
    width="20px"
    height="20px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2V6"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="loader-apple-arm loader-apple-arm-1"
    />
    <path
      d="M12 18V22"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="loader-apple-arm loader-apple-arm-2"
    />
    <path
      d="M6 12H2"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="loader-apple-arm loader-apple-arm-3"
    />
    <path
      d="M22 12H18"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="loader-apple-arm loader-apple-arm-4"
    />
    <path
      d="M19.0784 19.0784L16.25 16.25"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="loader-apple-arm loader-apple-arm-5"
    />
    <path
      d="M19.0784 4.99994L16.25 7.82837"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="loader-apple-arm loader-apple-arm-6"
    />
    <path
      d="M4.92157 19.0784L7.75 16.25"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="loader-apple-arm loader-apple-arm-7"
    />
    <path
      d="M4.92157 4.99994L7.75 7.82837"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="loader-apple-arm loader-apple-arm-8"
    />
  </svg>
</template>

<style scoped>
@keyframes apple-spinner-rotate {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes apple-spinner-fade {
  0% { opacity: 1; }
  100% { opacity: 0.3; }
}
.loader-apple-spinner {
  display: inline-block;
  animation: apple-spinner-rotate 1s linear infinite;
  /* `transform-origin` centers the rotation if used as icon */
  transform-origin: 50% 50%;
}
.loader-apple-arm {
  opacity: 0.3;
  animation: apple-spinner-fade 1s linear infinite;
}
.loader-apple-arm-1 { animation-delay: 0s; opacity: 1; }
.loader-apple-arm-2 { animation-delay: 0.125s; }
.loader-apple-arm-3 { animation-delay: 0.25s; }
.loader-apple-arm-4 { animation-delay: 0.375s; }
.loader-apple-arm-5 { animation-delay: 0.5s; }
.loader-apple-arm-6 { animation-delay: 0.625s; }
.loader-apple-arm-7 { animation-delay: 0.75s; }
.loader-apple-arm-8 { animation-delay: 0.875s; }
</style>