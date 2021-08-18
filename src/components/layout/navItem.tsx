import Link from 'next/link'
import { useRouter } from 'next/router'



interface NavItem {
    text: string
    svg: JSX.Element
    href: string
}

export default function Nav(props: NavItem) {

    const { asPath } = useRouter()

    const title = "/" + props.text.toLocaleLowerCase().trim()

    return (
        <div className="p-4">
            <div className={`flex text-base items-center text-gray-500 mb-3 hover:bg-blue-100 
             ${asPath == title ? 'bg-blue-50' : ''}
             rounded-lg p-2 cursor-pointer`}>
                <div className="">{props.svg}</div>
                <Link href={props.href}>
                    <p className="font-semibold ml-2">{props.text}</p>
                </Link>
            </div>
        </div>
    )
}