import style from "../../../styles/Carroucel.module.css"

interface carroucelProps {
    children: JSX.Element
}

export default function Carroucel(props: carroucelProps) {

    return (
        <div className="mb-3">
           {props.children}
        </div>
    )
}