import Layout from "../components/layout/Layout";
import BookClubMain from "../components/templates/bookclubMain";


export default function Home() {
  return (
    <div className="h-screen">
     <Layout>
       <BookClubMain></BookClubMain>
     </Layout>
    </div>
  )
}