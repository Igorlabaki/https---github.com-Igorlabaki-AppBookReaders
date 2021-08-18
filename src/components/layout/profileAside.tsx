import useAuth from "../../data/hook/useAuth"
import Avatar from "./avatar"

interface ProfileAsideProps {

}

export default function Aside(props: ProfileAsideProps) {

    const { user } = useAuth()

    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <div className="h-40 w-40 rounded-full bg-blue-50 flex justify-center items-center mb-2" >
                    <Avatar sizeImage="full" sizeDefault={14}></Avatar>
                </div>
                <div className="flex justify-center">
                    <p className="text-blue-700 border-b border-transparent hover:border-blue-700 cursor-pointer hover:">Update your photo</p>
                </div>
            </div>
            <div className="flex mt-5">
                <label htmlFor="" className="mr-2 font-bold">Name:</label>
               
            </div>
            <div className="flex mt-2">
                <label htmlFor="" className="mr-2 font-bold">Email:</label>
                <p>{user.email}</p>
            </div>
            <div>
                <p className="font-semibold">Porto, Portugal</p>
            </div>
        </div>
    )
}