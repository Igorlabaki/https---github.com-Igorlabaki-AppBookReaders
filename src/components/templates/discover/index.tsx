import Card from "../../layout/card";
import Carroucel from "../../layout/carroucel/carroucel";
import ItemCarroucel from "../../layout/carroucel/itemCarroucel";

interface DiscoverProps {

}

export default function DiscoverMain(props) {

  return (
    <>
      <Carroucel>
        <ItemCarroucel src="/images/photos/banner.jpg" alt="books"></ItemCarroucel>
      </Carroucel>
      <Card text="Feed">
        <></>
      </Card>
    </>
  )
}