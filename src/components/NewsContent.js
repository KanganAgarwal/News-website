import React from 'react'
import inshorts from "../inshorts.png"
const NewsContent = ({newsone}) => {
  
  return (
  
    <div className="m-2 h-[580px] md:h-[620px] lg:h-[350px] w-[98%] flex justify-center mx-auto " >
       

  <div className="flex flex-col lg:flex-row rounded-lg bg-white shadow-lg py-1 ">
    <img className=" w-[96%] h-[260px] lg:max-w-[40%]  lg:h-[98%]  object-cover rounded-lg mx-auto " src={newsone.urlToImage ? newsone.urlToImage :inshorts} alt="" />
    <div className="p-2 lg:p-3 flex flex-col justify-start lg:pl-8 ">
      <h5 className="text-gray-900 text-base md:text-xl font-medium mb-2">{newsone.title.substring(0,100) + "..."}</h5>
      <p className="text-gray-700 text-base  md:text-lg mb-4">
        
      {newsone.description.length > 250 ?( newsone.description.substring(0,270)+"...") :(newsone.description)}
    </p>
   <p className="text-xs md:text-sm">By {newsone.author ? newsone.author : "Anonymous"}</p>
 
    <a href={newsone.url} className="bg-sky-600 font-semibold text-white py-3 px-2 rounded-xl w-fit-content text-sm md:text-base  w-[95px] my-2 md:my-4 text-center" >
      Read more</a> 
 
      <p className="text-gray-600 text-xs md:text-sm mb-1">"Last updated: "{newsone.publishedAt.split("T").join(" IST ").split("Z")}</p>
     
    </div>
  
  </div>
 
</div>



    
  )
}

export default NewsContent