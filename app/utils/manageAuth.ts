const destroyAuth = () => {
//   localStorage.removeItem('token')
//   localStorage.removeItem('user')
  useRouter().push('/auth')
}
const initAuth = async (email: string, password: string) => {   
  useRouter().push('/main')    
}
const signUp = async (name: string, email: string, password: string, phoneNumber: string) => {

}

export { destroyAuth, initAuth }