import { React } from "react";

const Header = () => {
    return (
        <nav
            className="flex justify-center items-center pt-6 px-16 text-4xl font-bold mb-12"
        >
            <ul
                className="flex gap-8"
            >
                <li className="hover:underline hover:text-neutral-500"><a href="#Portfolio">Portfolio</a></li>
                <li className="hover:underline hover:text-neutral-500"><a href="#Blog">Blog</a></li>
                <li className="hover:underline hover:text-neutral-500"><a href="#Contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Header;