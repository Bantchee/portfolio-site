import React from "react";
import pic from "../img/my_pic.jpg";
import { faTwitter, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
    return (
        <div
            id="Home"
            className="flex flex-col items-center justify-center text-2xl font-bold"
        >
            <p>Front End Engineer</p>
            <img 
                src={pic} 
                alt="J. Steven Jarrett" 
                className="w-48 rounded-full"
            />
            <div>
                <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
        </div>
    )
}

export default Home;