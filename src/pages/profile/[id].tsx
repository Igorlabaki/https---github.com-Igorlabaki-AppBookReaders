import Layout from "../../components/layout/Layout";
import ProfileMain from "../../components/templates/profile";


export default function Profile() {
  return (
    <div className="h-screen ">
     <Layout profile="true">
       <ProfileMain></ProfileMain>
     </Layout>
    </div>
  )
}