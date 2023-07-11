import React from "react";
import {motion} from "framer-motion";

const AnimatedText = ({text, className=""}:{text: string, className: string}) => {
    return (
        <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
            <h1 className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}`}>
                <span className="inline-block">
                    {text}
                </span>
            </h1>
        </div>
    )
}
export default AnimatedText