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
import Projects from "./Projects";

const Home = () => {
    return (
        <div id="Portfolio" className="flex flex-col gap-4 items-center justify-center">
            <div id="About" className="flex flex-col items-center max-w-6xlmx-auto">
                <div className="flex flex-col items-center justify-center text-center max-w-xl" >
                    <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
                        J. Steven Jarrett
                    </h1>
                    <p className="text-base md:text-xl mb-3 font-medium">
                        Software Engineer &amp; Full Stack Developer
                    </p>
                    <div id="portfolio-social-links" className="flex gap-3">
                        <a href="mailto:stevenjarrett26@gmail.com">
                            <FontAwesomeIcon 
                                icon={faEnvelope} 
                                className="hover:text-neutral-500"
                                size="2x"
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/steven-jarrett-b52296263/" target="_blank" rel="noreferrer noopener">
                            <FontAwesomeIcon   
                                icon={faLinkedin}
                                className="hover:text-neutral-500"
                                size="2x" 
                            />
                        </a>
                        <a href="https://github.com/Bantchee" target="_blank" rel="noreferrer noopener">
                            <FontAwesomeIcon 
                                icon={faGithub} 
                                className="hover:text-neutral-500"
                                size="2x"
                            />
                        </a>
                    </div>
                </div>
            
            </div>
            
            <div id="Projects" className="flex flex-col items-center gap-4">
                <Projects />

                <div id="Skills" className="flex flex-col items-center max-w-6xl mx-auto">
                    <div className="flex items-center font-bold md:gap-x-4 sm:gap-x-2 flex-wrap">
                        <p className="text-2xl mb-1 mr-1">Languages |</p>
                        <FontAwesomeIcon icon={faHtml5} size="2x" className="text-orange-500" title="HTML5"/>
                        <FontAwesomeIcon icon={faCss3} size="2x"  className="text-blue-500" title="CSS3"/>
                        <FontAwesomeIcon icon={faJs} size="2x" className="text-yellow-500" title="JavaScript"/>
                    </div>
                    <div className="flex items-center justify-center font-bold md:gap-x-4 sm:gap-x-2 flex-wrap">
                        <p className="text-2xl mb-1 mr-1">Tech |</p>
                        <FontAwesomeIcon icon={faNodeJs} size="2x" className="text-green-500" title="Node.js"/>
                        <FontAwesomeIcon icon={faReact} size="2x" className="text-blue-500" title="React.js"/>
                        <img src={expressIcon} alt="express icon" className="w-10" title="Express.js"/>
                        <img src={mongodbIcon} alt="mongoDB icon" className="w-10" title="MongoDB"/>
                        <img src={tailwindCSSIcon} alt="tailwind css icon" className="w-10" title="Tailwind CSS"/>
                        <img src={jestIcon} alt="jest icon" className="w-10" title="Jest"/>
                    </div>
                    <div className="flex items-center font-bold md:gap-x-4 sm:gap-x-2 flex-wrap">
                        <p className="text-2xl mb-1 mr-1">Tools |</p>
                        <img src={vscodeIcon} alt="jest icon" className="w-10 fill-blue-500" title="VSCode"/>
                        <FontAwesomeIcon icon={faNpm} size="2x" className="text-red-500" title="npm"/>
                        <FontAwesomeIcon icon={faGitAlt} size="2x" className="text-orange-500" title="Git"/>
                        <FontAwesomeIcon icon={faGithub} size="2x" className="text-black" title="GitHub"/>
                        <FontAwesomeIcon icon={faFigma} size="2x" className="text-purple-500" title="Figma"/>
                        <FontAwesomeIcon icon={faTerminal} size="2x" className="text-black" title="Terminal"/>
                    </div>
                </div>

                <div>
                        <a href="https://github.com/Bantchee" target="_blank" rel="noreferrer noopener" className="bg-black rounded-md text-white font-bold p-2 text-xl">More Projects</a>
                </div>
            </div>

        </div>
    )
}

export default Home;