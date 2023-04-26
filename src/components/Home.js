import React from "react";
import pic from "../img/my_pic.jpg";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
    return (
        <div
            id="Home"
            className="flex flex-col items-center justify-center"
        >
            <div
                className="text-center max-w-xl font-bold"
            >
                <p
                    className="text-4xl mb-1 hover:text-neutral-500"    
                >
                    J. Steven Jarrett
                </p>
                <p
                    className="text-xl mb-1"  
                >
                    Software Engineer &amp; Full Stack Developer
                </p>
                <p
                    className=" text-sm"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            
            <img 
                src={pic} 
                alt="J. Steven Jarrett" 
                className="w-48 rounded-full"
            />
            <div
                className="flex gap-3"
            >
                <a href="mailto:stevenjarrett26@gmail.com">
                    <FontAwesomeIcon 
                        icon={faEnvelope} 
                        className="hover:text-neutral-500"
                        size="2x"
                    />
                </a>
                <a href="https://www.linkedin.com/in/steven-jarrett-b52296263/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon   
                        icon={faLinkedin}
                        className="hover:text-neutral-500"
                        size="2x" 
                    />
                </a>
                <a href="https://github.com/Bantchee" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon 
                        icon={faGithub} 
                        className="hover:text-neutral-500"
                        size="2x"
                    />
                </a>
            </div>
        </div>
    )
}

export default Home;