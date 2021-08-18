import route from 'next/router'
import { createContext, useEffect, useState } from 'react'
import firebase from '../../firebase/config'
import User from '../../model/user'
import Cookies from 'js-cookie'

interface AuthContextProps {
  user?: User
  loginGoogle?: () => Promise<void>
  logout?: () => Promise<void>
  login?: (email,password) => Promise<void>
  register?: (email,password) => Promise<void>
}

async function userNormalized(userFirebase: firebase.User): Promise<User> {
  const token = await userFirebase.getIdToken()
  return {
    uid: userFirebase.uid,
    name: userFirebase.displayName,
    email: userFirebase.email,
    token,
    provedor: userFirebase.providerData[0].providerId,
    imageUrl: userFirebase.photoURL
  }
}

function createCookie(login: boolean) {
  if (login) {
    Cookies.set('admin-template-auth', login, {
      expires: 7
    })
  } else {
    Cookies.remove('admin-template-auth')
  }
}

const AuthContext = createContext<AuthContextProps>({})

export function AuthProvider(props) {

  const [load, setLoad] = useState(true)
  const [user, setUser] = useState<User>(null)

  async function configSession(userFirebase) {
    if (userFirebase?.email) {
      const user = await userNormalized(userFirebase)
      setUser(user)
      createCookie(true)
      setLoad(false)
      return user.email
    } else {
      setUser(null)
      createCookie(false)
      setLoad(false)
      return false
    }
  }

  async function loginGoogle() {

    try {
    const resp = await firebase.auth().signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )

    await configSession(resp.user)
    route.push("/discover")
    
    } finally {
      setLoad(false)
    } 
}

async function login(email,password) {

  try {
  const resp = await firebase.auth().signInWithEmailAndPassword(email,password)

  await configSession(resp.user)
  route.push("/discover")
  
  } finally {
    setLoad(false)
  } 
}



async function register(email,password) {

  try {
  const resp = await firebase.auth().createUserWithEmailAndPassword(email,password)

  await configSession(resp.user)
  route.push("/discover")
  
  } finally {
    setLoad(false)
  } 
}

  async function logout(){
    try {
      setLoad(true)
      await firebase.auth().signOut()
      await configSession(null)
      route.push('/')
    } finally {
      setLoad(false)
    }
  }
  
    

  useEffect(() => {
    if(Cookies.get('admin-template-auth')){
      const cancel = firebase.auth().onIdTokenChanged(configSession)
      return  cancel
    }
  },[])

  return (
    <AuthContext.Provider value={{
      user,
      loginGoogle,
      logout,
      login,
      register
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext