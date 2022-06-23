import React,{useState} from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import inshorts from "../inshorts.png"
// import Sidebar from './Sidebar'
import{ datas} from "../Datas"
const Navbar = ({categorySelected, setCategorySelected}) => {
    const[open,setOpen]= useState(false)
  return (
      <>
    <div className="h-[60px] w-screen flex items-center justify-between px-8 shadow-md relative ">
        <MenuIcon className="h-9 w-9 text-gray-700 cursor-pointer" onClick={()=>setOpen(!open)}/>
        <div>
            <img src={inshorts} className="h-12 object-contain" alt="inshorts"/>
        </div>
        <div/>
    </div>
    {open && 
   (
      <div className=" flex flex-col w-[220px] h-screen bg-gray-700 text-white space-y-2 absolute top-0">
        <div className="flex items-center justify-between px-3 border-b border-gray-200 py-2">
        <p className="py-3 pl-2 text-lg ">Categories</p>
        <XIcon className="h-6 w-6 cursor-pointer "  onClick={()=>setOpen(false)}/>
        </div>
        {
            datas.map(category=>(
                
 <div className="hover:bg-gray-500 hover:rounded-tr hover:rounded-bt hover:rounded-lg cursor-pointer flex items-center pl-8 py-2 mx-1"  
  >
        <button className="text-lg"  onClick={(e)=>{setCategorySelected(e.target.innerText.toLowerCase());
        setOpen(false);}}>{category}</button>
   {console.log(categorySelected)}
    </div>

            ))
        }
        
    </div>
   )
}
    </>
  )
}

export default Navbar