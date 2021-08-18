import useAuth from "../../data/hook/useAuth"
import {world, book, avatar, group} from "../icons/icons"
import NavItem from "./navItem"

export default function Nav(props) {

    const {user} = useAuth()

    return (
        <div className="flex flex-col border-2 rounded-t-lg overflow-hidden w-full">
            <div>
                <NavItem text="Discover" svg={world} href="/discover"></NavItem>
                <NavItem text="Bookshelve" svg={book} href="/bookshelve"></NavItem>
                <NavItem text="BookClub" svg={group} href="/bookclub"></NavItem>
                <NavItem text="Profile" svg={avatar(6)} href={`/profile/${user.uid}`}></NavItem>
            </div>
        </div>
    )
  } 