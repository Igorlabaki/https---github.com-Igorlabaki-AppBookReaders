import Link from "next/link"
import { useState } from "react"

import { search, down, notficaiton, settings, logoutIcon } from "../icons/icons"
import DropDown from "./dropDown/dropdown"
import MenuItem from "./dropDown/menuItem"
import NotificationItem from "./dropDown/notificationItem"
import Avatar from "./avatar"
import useAuth from "../../data/hook/useAuth"

export default function Header(props) {

  const { logout, user } = useAuth()

  const [searchInput, setSearchInput] = useState("Search")
  const [menuDropDown, setmenuDropDown] = useState(false)
  const [notificationDropDown, setnotificationDropDown] = useState(false)

  function menuDrop() {
    if (menuDropDown) {
      setmenuDropDown(false)
    } else {
      setmenuDropDown(true)
    }
  }


  function notificationDrop() {
    if (notificationDropDown) {
      setnotificationDropDown(false)
    } else {
      setnotificationDropDown(true)
    }
  }

  return (
    <>
      <header className="flex p-8">
        <Link href="/discover"><p className="text-4xl font-medium font-lora cursor-pointer">BookReaders</p></Link>
        <div className="flex-1 flex justify-center">
          <div className="w-8 h-8 bg-blue-500 hover:bg-blue-300 text-white rounded-l flex justify-center items-center cursor-pointer">
            {search}
          </div>
          <input type="text" className="rounded-r h-8 w-2/5 px-3 outline-none border" placeholder="Search" onChange={e => setSearchInput(e.target.value)} />
        </div>
        <div className="flex items-center relative justify-center">
          <div className="ml-2 mr-2 cursor-pointer hover:bg-blue-50  p-1 rounded-full relative" onClick={notificationDrop}>
            <div className="h-4 w-4 p-2 rounded-full bg-red-400  absolute right-0 top-0 -mt-3 text-white flex items-center justify-center">2</div>
            {notficaiton}
            {notificationDropDown ? (
              <DropDown width="72" heigth="max-h-72" >
                <>
                  <NotificationItem text={`We send to your email a verification, please confirm`}></NotificationItem>
                  <NotificationItem text={`Hello ${user.name}. Welcome to the Bookreaders network.`}></NotificationItem>
                </>
              </DropDown>

            ) : false}
          </div>

          <Avatar sizeImage="12" sizeDefault={7}></Avatar>
          <div className="ml-2 cursor-pointer hover:bg-blue-50  p-1 rounded-full" onClick={menuDrop}>
            {down(4)}
          </div>
          {menuDropDown ?
            <DropDown width="52" heigth="h-auto">
              <>
                <MenuItem text="Settings" svg={settings} href="/settings" ></MenuItem>
                <MenuItem text="Logout" svg={logoutIcon} onClick={logout} ></MenuItem>
              </>
            </DropDown>
            :
            false
          }

        </div>
      </header>
    </>
  )
}


