const destroyAuth = () => {
//   localStorage.removeItem('token')
//   localStorage.removeItem('user')
  useRouter().push('/auth')
}

const initAuth = async () => {  
  useRouter().push('/main')    
}

export { destroyAuth, initAuth }