import Text   from "./Text";
import Button from "./link";
import Icon   from "./Icon";
import Modal   from "./Modal";

import { useState } from "react";

export default function WelcomePage(props) {

    const [loginModal, setLoginModal]       = useState(false)
    const [registerModal, setRegisterModal] = useState(false)  

    function renderModal(){
      if(loginModal){
        return <Modal text="Login" type={LoginModal}></Modal>
      }else if(registerModal){
        return <Modal text="Register" type={RegisterModal} register={true}></Modal>
      }else{
        return ""
      }
    }

    function LoginModal(){
      if(loginModal === true){
        setLoginModal(false)
      }else{
        setRegisterModal(false)
        setLoginModal(true)
      }
    }

    function RegisterModal(){
      if(registerModal === true){
        setRegisterModal(false)
      }else{
        setLoginModal(false)
        setRegisterModal(true)
      }
    }

    return (
      <div className=" h-screen bg-welcomeImage bg-center bg-cover flex flex-col relative">
        {renderModal()}
        <div className="p-6 flex">
          <img className="w-1/6" src="/images/logo/logo.png" alt="logo" />
          <div className="flex flex-grow justify-end ">
            <Button text="Login"    onClick={LoginModal}></Button>
            <Button text="Register" onClick={RegisterModal}></Button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center flex-1">
          <Text></Text> 
        </div>
        <div className="bottom-0 mb-3">
            <p className="text-semibold text-white ml-4">Coded by Igor Gonçalo</p>
            <div className="flex mt-1">
            <Icon alt="github-icon" img="/images/brand-icons/github.png" url="https://github.com/Igorlabaki"></Icon>
            <Icon alt="linkedin-icon" img="/images/brand-icons/linkedin.png" url="https://www.linkedin.com/in/igor-augusto-labaki-goncalo-b75918199/"></Icon>
            <Icon alt="gmail-icon" img="/images/brand-icons/gmail.png" url="https://www.linkedin.com/in/igor-augusto-labaki-goncalo-b75918199/"></Icon>
            </div>
        </div>
      </div>
    )
  }