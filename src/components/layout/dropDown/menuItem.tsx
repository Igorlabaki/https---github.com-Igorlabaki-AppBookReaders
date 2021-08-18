import Link from "next/link";

interface menuItem {
    text: string
    svg: JSX.Element
    href?: string
    onClick?: (event: any) => void
}

export default function Nav(props: menuItem) {

    return (
        <>
            <li className="flex hover:bg-blue-100 p-3 cursor-pointer font-semibold">
                {props.svg}
                {props.href ? (
                    <Link href={props.href}>
                        <p className="font-semibold ml-2">{props.text}</p>
                    </Link>
                ):
                    <p onClick={props.onClick}>{props.text}</p>
                }

            </li>
        </>
    )
}