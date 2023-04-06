import { Link } from "react-router-dom"

const Nav = () => {

    return(
        <nav className="w-100 flex gap-10 mb-10 bg-slate-400 font-extrabold text-sky-800 tracking-wide underline">
            <Link to={'/'}>Manage Players </Link>
            <p>|</p>
            <Link to={'/status/1'}>Manage Player Status</Link>
        </nav>
    )

}

export default Nav