import React from "react";
import { useState } from "react";

const ProjectItem = ({title, description, projectType, imgUrl, siteLink, codeLink}) => {
    const [displayDescription, setDisplayDescription] = useState(false);

    return (
        <div 
            className="border-2 border-black rounded-md p-2"
            onClick={() => setDisplayDescription(!displayDescription)}
        >
            <img 
                src={imgUrl} 
                alt="portfolio project"
                className="h-32 md:h-48 object-cover cursor-ponter rounded-md"
            />
            <div className="flex flex-col items-center">
                <h3 className="font-bold text-xl">{title}</h3>
                <h4 className="font-bold text-md pb-1">{projectType}</h4>
                <div className="flex gap-2">
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
            </div>
        </div>
        
    );
};

export default ProjectItem;