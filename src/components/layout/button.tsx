

interface ButtonProps {
    text: string
    submit: (event: any) => void
    children?: JSX.Element
    googleButton?: boolean
}

export default function Button(props: ButtonProps) {

    return (
        <button
            className={
                `text-white 
                ${props.googleButton ? "bg-red-600  hover:bg-red-400" : "bg-blue-700  hover:bg-blue-500" }
                    shadow-lg rounded-lg h-10 mt-3 flex justify-center
                    items-center w-full`}
                    onClick={props.submit}>
            <p>{props.text}</p>
            {props.children}
        </button>)
}