import { warn } from "../icons/icons";

interface WarnProps{
    text:string
}

export default function Warn(props: WarnProps) {

    return (
      <div className=" flex bg-red-300 text-white p-2 rounded-b rounded-l justify-center items-center">
        <div className="mr-3">{warn}</div>
        <span>{props.text}</span>
      </div>
    )
  }