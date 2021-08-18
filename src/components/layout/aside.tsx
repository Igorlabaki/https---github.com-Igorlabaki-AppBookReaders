

interface AsidesProps{
    
}

export default function Aside(props) {

    return (
      <div className="h-auto w-1/5 p-4 flex flex-col items-center">
        {props.children}
      </div>
    )
  }