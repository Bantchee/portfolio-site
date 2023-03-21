import { React } from "react";

const Header = () => {
    return (
        <nav
            className="flex justify-between pt-6 px-16 text-4xl font-bold"
        >
            <a className="hover:underline" href="#home">J. Steven Jarrett</a>
            <ul
                className="flex gap-8"
            >
                <li className="hover:underline"><a href="#Portfolio">Portfolio</a></li>
                <li className="hover:underline"><a href="#About">About</a></li>
                <li className="hover:underline"><a href="#Contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Header;