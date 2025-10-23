export default defineNuxtRouteMiddleware((to, _from) => {
  const session = useSupabaseSession()

  if (!session.value) {
    console.log('no hay sesion')
    // return navigateTo('/login')
  } else {
    console.log('hay sesion')
  }
})
