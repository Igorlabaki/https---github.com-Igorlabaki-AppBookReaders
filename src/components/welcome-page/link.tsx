interface ButtonProps{
  text:     string
  onClick: (event: any) => void
}

export default function button(props: ButtonProps) {

    

    return (
      <span>
          <button className={`
          text-white text-2xl ml-10 
          font-medium hover:text-blue-300 `} onClick={props.onClick}>
            {props.text}
          </button>
      </span>
    )
  }