import React from "react";
import { faLinkedin, faGithub, faHtml5, faCss3, faJs, faNodeJs, faReact, faFigma, faGitAlt, faNpm, } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import expressIcon from "../icons/express.svg";
import jestIcon from "../icons/jest.svg";
import mongodbIcon from "../icons/mongoDB.svg";
import tailwindCSSIcon from "../icons/tailwindCSS.svg";
import vscodeIcon from "../icons/vscode.svg";

const Home = () => {
    return (
        <div
            id="Portfolio"
        >
            <div id="Portfolio-About" className="flex flex-col items-center max-w-6xlmx-auto">
                <div
                    className="flex flex-col items-center justify-center text-center max-w-xl font-bold"
                >
                    <p
                        className="text-4xl mb-1"    
                    >
                        J. Steven Jarrett
                    </p>
                    <p
                        className="text-xl mb-1"  
                    >
                        Software Engineer &amp; Full Stack Developer
                    </p>
                    <p
                        className="text-sm"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div
                        id="portfolio-social-links"
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
            
            </div>
            <div id="Portfolio-Skills" className="flex flex-col items-center max-w-6xl mx-auto">
                <div className="flex items-center gap-4 font-bold">
                    <p className="text-2xl mb-1">Languages |</p>
                    <FontAwesomeIcon icon={faHtml5} size="2x" className="text-orange-500" title="HTML5"/>
                    <FontAwesomeIcon icon={faCss3} size="2x"  className="text-blue-500" title="CSS3"/>
                    <FontAwesomeIcon icon={faJs} size="2x" className="text-yellow-500" title="JavaScript"/>
                </div>
                <div className="flex items-center gap-4 font-bold">
                    <p className="text-2xl mb-1">Technologies |</p>
                    <FontAwesomeIcon icon={faNodeJs} size="2x" className="text-green-500" title="Node.js"/>
                    <FontAwesomeIcon icon={faReact} size="2x" className="text-blue-500" title="React.js"/>
                    <img src={expressIcon} alt="express icon" className="w-10" title="Express.js"/>
                    <img src={mongodbIcon} alt="mongoDB icon" className="w-10" title="MongoDB"/>
                    <img src={tailwindCSSIcon} alt="tailwind css icon" className="w-10" title="Tailwind CSS"/>
                    <img src={jestIcon} alt="jest icon" className="w-10" title="Jest"/>
                </div>
                <div className="flex items-center gap-4 font-bold">
                    <p className="text-2xl mb-1">Tools |</p>
                    <img src={vscodeIcon} alt="jest icon" className="w-10 fill-blue-500" title="VSCode"/>
                    <FontAwesomeIcon icon={faNpm} size="2x" className="text-red-500" title="npm"/>
                    <FontAwesomeIcon icon={faGitAlt} size="2x" className="text-orange-500" title="Git"/>
                    <FontAwesomeIcon icon={faGithub} size="2x" className="text-black" title="GitHub"/>
                    <FontAwesomeIcon icon={faFigma} size="2x" className="text-purple-500" title="Figma"/>
                    <FontAwesomeIcon icon={faTerminal} size="2x" className="text-black" title="Terminal"/>
                </div>
                {/* Set Up to pull from JSON / Database */}

            </div>
        </div>
    )
}

export default Home;