import Icon from "../../welcome-page/Icon";
import {arrowRight, arrowLeft} from "../../icons/icons"

interface itemCarroucelProps {
    src: string
    alt: string
    arrowRigth?: boolean
    arrowLeft?: boolean 
}

export default function itemCarroucelProps(props: itemCarroucelProps) {

    return (
        <div className="mb-3 relative z-0">
            <div className="absolute bg-gray-300 hover:bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center right-5 top-48 cursor-pointer">
                {arrowRight}
            </div>
            <div className="absolute bg-gray-300 hover:bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center left-5 top-48 cursor-pointer">
                {arrowLeft}
            </div>
            <img src={props.src} alt={props.alt} className="h-96 w-full rounded-lg mt-4" />
        </div>
    )
}