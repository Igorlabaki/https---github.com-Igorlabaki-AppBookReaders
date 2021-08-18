import Input from "../input/Input";
import Warn from "../layout/warning";
import Button from "../layout/button";

import { close } from "../icons/icons";
import { useState } from "react";
import useAuth from "../../data/hook/useAuth";

interface ModalProps {
  text: string
  type: (event: any) => void
  register?: boolean
}

export default function Modal(props: ModalProps) {


  const [nameInput, setNameInput] = useState("")
  const [passwordInput, setpasswordInput] = useState("")
  const [passworConfirmdInput, setpasswordConfirmInput] = useState("")
  const [emailInput, setemailInput] = useState("")
  const [mode, setmode] = useState(props.text)
  const [error, seterror] = useState(null)


  const {user, loginGoogle, login, register} = useAuth()


  function showError(msg,time = 5000){
    seterror(msg)
    setTimeout(() => seterror(null),time )
  }

  async function submit() {
    try{
      if (mode === 'Login') {
        await login(emailInput,passwordInput)
      } else {
        await register(emailInput,passwordInput)
      }
      }catch(e){
        showError(e?.message ?? "Unexpected error.")
      }
  }


  return (
    <div className="absolute flex  flex-col justify-center w-1/4 h-auto bg-gray-100 rounded-lg p-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex justify-end mb-3 relative">
        <div
          className="absolute right-2 w-7 h-7 p-1 rounded-full hover:bg-gray-200 flex justify-center items-center cursor-pointer"
          onClick={props.type}>
          {close}
        </div>
      </div>
      <h1 className="text-2xl text-blue-700 font-bold mb-3">{mode}</h1>
      <hr />
      {error ?
        <Warn text={error}></Warn>
        :
        false
      }
      <div>
        <Input label="Email" type="email" onChange={setemailInput} value={emailInput} required ></Input>
        <Input label="Username" type="text" onChange={setNameInput} value={nameInput} required  noRender={mode === 'Login'}></Input>
        <Input label="Password" type="password" onChange={setpasswordInput} value={passwordInput} required></Input>
        <Input label="Confirm Password" type="password" onChange={setpasswordConfirmInput} value={passworConfirmdInput} required noRender={mode === 'Login'}></Input>
      </div>
      {mode == "Login" ? (
        <p className="mt-8">
          Are you new here?
          <a onClick={() => setmode('Register')} className={`
                          text-blue-500 hover:text-blue-700 font-semibold
                          cursor-pointer ml-2
                      `}>Create a account here.</a>
        </p>
      ) : (
        <p className="mt-8">
          Do you already have an account?
          <a onClick={() => setmode('Login')} className={`
                          text-blue-500 hover:text-blue-700 font-semibold
                          cursor-pointer hover:border hover:border-blue-700
                      `}
          > Click here.</a>
        </p>
      )}
       <Button
        text={mode === 'Login' ? 'Confirm' : 'Register'}
        submit={submit}
        >
        <>
        </>
      </Button>
      { mode === 'Login' ?
      (
        <Button
        text="Sing in with"
        submit={loginGoogle}
        googleButton
        >
        <>
        <div className="ml-2">
                <img src="https://img.icons8.com/color/48/000000/google-logo.png" className="w-7 h-7" />
        </div>
        </>
      </Button>
      ): false
      }
      
      
    </div>
  )
}