import React from "react";
import pic from "../img/my_pic.jpg";

const Portfolio = () => {
    return (
        <div
            id="Portfolio"
            className="flex flex-col items-center justify-center text-2xl font-bold"
        >
            <p>Front End Engineer</p>
            <img 
                src={pic} 
                alt="J. Steven Jarrett" 
                className="w-48 rounded-full"
            />
            <div>
                <p>Social Links</p>
                {/* 
                    email
                    twitter
                    instagram
                    linkin
                    github
                */}
            </div>
        </div>
    )
}

export default Portfolio;