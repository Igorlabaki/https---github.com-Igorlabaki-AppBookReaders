import useAuth from "../../data/hook/useAuth"
import {avatar} from "../icons/icons"

interface AvatarProps{
    sizeImage: string
    sizeDefault?:number
}

export default function Avatar(props: AvatarProps) {

    const { user } = useAuth()

    return (
      <>
      {user?.imageUrl ? (
          <img src={user.imageUrl} className={`h-${props.sizeImage} w-${props.sizeImage} rounded-full bg-white flex justify-center items-center
           cursor-pointer" alt="user photo`} />
      ) : (
        avatar(props.sizeDefault)
      )}

      </>
    )
  }