import Card from "../../layout/card"

interface ProfileProps{
    
}

export default function ProfileMain(props) {

    return (
      <div className="p-10 flex-1">
        <Card text="Bio">
          <>
            <textarea className="w-full border-1 outline-none bg-gray-100 rounded-lg p-4" placeholder="I Love Books"></textarea>
            <div className="flex justify-end">
              <p className="text-blue-700 cursor-pointer border-b border-transparent hover:border-blue-700">Edit</p>
            </div>
          </>
        </Card>
        <div className="mt-10"></div>
        <Card text="Reading Stats">
          <>
           <div>
             <h1 className="text-lg">Reading Challenger</h1>
             <div className="flex justify-center mt-3">
                <p className="text-blue-700 cursor-pointer border-b border-transparent hover:border-blue-700">You dont have a challenger yet. Click here and set up one</p>
             </div>
             <div className=" flex justify-center mt-3">
                <hr className="w-4/6" />
             </div>
             <div className="flex mt-3 h-full">
                <div className="w-2/6 flex  flex-1 flex-col items-center">
                  <h2>Book Read</h2>
                  <img src="/images/ilustration/book-read.jpeg" alt="" />
                  <p className="bottom-0 flex-1 flex  items-end">0</p>
                </div>
                <div className="w-2/6 flex flex-col items-center">
                  <h2>Pages Read</h2>
                  <img src="/images/ilustration/pages-read.jpeg" alt="" />
                  <p>0</p>
                </div>
                <div className="w-2/6 flex flex-col items-center">
                  <h2>Reader bagdes</h2>
                  <img src="/images/ilustration/reader-level.jpeg" alt="" />
                  <p className="flex-1">0</p>
                </div>
             </div>
           </div>
          </>
        </Card>
      </div>
    )
  }