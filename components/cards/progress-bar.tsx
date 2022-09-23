 
import React, { useEffect, useState } from "react";
  
interface Porps {
    progressPercentage: number;
    name?:string
}

const ProgressBar = ({ progressPercentage, name }:Porps) => {
    const [percentage, setPercentage] = useState(progressPercentage || 0);
    useEffect(() => {
       setPercentage(progressPercentage)
    }, [progressPercentage])
    if(!percentage && percentage==0) return <div></div>
    return (
        <div className='h-[6px] w-full bg-gray-300 relative '>
            <div className={`absolute -top-5 font-semibold  text-gray-800 text-sm ${`left-[`+0+`%]`} `}>{name}</div>
            <div style={{ left: `${percentage}%`}} className={`absolute -top-5 px-[6px] py-1 bg-gray-800 text-white text-xs  `}>{percentage}%</div>
            <div
                style={{ width: `${percentage}%`}}
                className={`h-full ${
                    percentage < 70 ? 'bg-gray-800' : 'bg-gray-800'}`}>
            </div>
        </div>
    );
};

export default ProgressBar;