import React from "react";
import { useState } from "react";

const ProjectItem = ({title, description, imgUrl, siteLink, codeLink}) => {
    const [displayDescription, setDisplayDescription] = useState(false);

    return (
        <div 
            className="border-2 border-black rounded-md p-2 cursor-pointer"
            onClick={() => setDisplayDescription(!displayDescription)}
        >
            <img 
                src={imgUrl} 
                alt="portfolio project"
                className="w-full h-36 md:h-48 object-cover cursor-ponter rounded-md"
            />
            <div className="w-full">
                <h3>{title}</h3>
                {(displayDescription) ? 
                    <div>
                        <p>{description}</p>
                        <div
                            className="flex gap-1"
                        >
                            <a 
                                href={siteLink}  
                                target="_blank" 
                                rel="noreferrer noopener" 
                                className="hover:underline font-bold border-2 border-black rounded-md px-1"
                            >
                                Site
                            </a>
                            <a 
                                href={codeLink}  
                                target="_blank" 
                                rel="noreferrer noopener" 
                                className="hover:underline font-bold border-2 border-black rounded-md px-1"
                            >
                                Code
                            </a> 
                        </div>
                    </div> : null}
                
                
            </div>
        </div>
        
    );
};

export default ProjectItem;