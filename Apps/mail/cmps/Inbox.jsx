const { Link } = ReactRouterDOM
import '../assets/css/mail-style.css'

export function Inbox(props) {


    return (
        <Link className="mail-link flex-col" to={`/mail/list`}>
            <button calssName='inbox-btn side-btn'> Inbox</button>
        </Link>
    )
}