import Layout from "../components/layout/Layout";
import BookShelveMain from "../components/templates/bookshelveMain";


export default function Bookshelve() {
  return (
    <div className="h-screen">
     <Layout>
       <BookShelveMain></BookShelveMain>
     </Layout>
    </div>
  )
}