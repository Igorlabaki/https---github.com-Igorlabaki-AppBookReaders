interface notificationItem {
    text: string
}

export default function Nav(props: notificationItem) {

    return (
        <>
            <li className="flex hover:bg-blue-100 p-3 cursor-pointer font-semibold">
             <p>{props.text}</p>
            </li>
            <hr />
        </>
    )
}