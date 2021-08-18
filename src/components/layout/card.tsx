interface CardProps{
    text:string
    children: JSX.Element
    editCard?: any
}

export default function Card(props: CardProps) {

  

    return (
       <div className="w-full">
          <div className={`bg-gray-200 p-3 rounded-t-lg w-full text-lg font-ligth text-black border `} >
            {props.text}
          </div>
          <div className="bg-white rounded-b p-4 border">
            {props.children}
          </div>
      </div>
    )
  } 