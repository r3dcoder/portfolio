import React from 'react'

interface Props{
    title:string
}
const TopHeadlineCard = ({title}:Props) => {
  return (
    <div className="w-full text-base md:text-4xl font-bold text-center">
        {title}
        <div className="flex flex-col place-items-center space-y-1">
          <div className="w-40 h-[1px] bg-gray-600"></div>
          <div className="w-60 h-[1px] bg-gray-800"></div>
          <div className="w-40 h-[1px] bg-gray-600"></div>
        </div>
      </div>
  )
}

export default TopHeadlineCard