import  Header  from "./header"
import  Aside  from "./aside"
import  Nav  from "./nav"
import  ProfileAside  from "./profileAside"
import { useState } from "react"

export default function Layout(props) {

    const [profileView, setProfileView] = useState(false)

    function noNav(){
      return props.profile ? (
        <ProfileAside></ProfileAside>
     ):(
       <Nav></Nav>
     )
    }

    return (
      <div className="w-4/6 mx-auto h-screen">
        <Header></Header>
        <div className="flex justify-center">
          <Aside>
            {noNav()}
          </Aside>
          <div className="flex-1">
          {props.children}
          </div>
        </div> 
      </div>
    )
  }