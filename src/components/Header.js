import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { React } from "react";

const Header = () => {
    return (
        <nav
            className="flex justify-end items-center pt-6 px-16 text-4xl font-bold mb-12"
        >
            <ul
                className="flex gap-8"
            >
                <li>
                    <button>
                        <FontAwesomeIcon icon={faSun}/>
                    </button>
                </li>
                <li className="hover:underline hover:text-neutral-500"><a href="#Portfolio">P</a></li>
                <li className="hover:underline hover:text-neutral-500"><a href="#Blog">B</a></li>
                <li className="hover:underline hover:text-neutral-500"><a href="#Contact">C</a></li>
            </ul>
        </nav>
    )
}

export default Header;