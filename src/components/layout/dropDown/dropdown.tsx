import Link from "next/link"
import useAuth from "../../../data/hook/useAuth"


interface DropDownProps {
  children: JSX.Element
  width: string
  heigth:string
}

export default function DropDown(props: DropDownProps) {

  const { logout } = useAuth()

  return (
    <div className={`absolute w-${props.width} ${props.heigth}  border -mb-28 right-0 rounded-b-lg rounded-l-lg shadow-lg bg-white overflow-auto z-10`}>
      <ul>
        {props.children}
      </ul>
    </div>
  )
}