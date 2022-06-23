import React from 'react'
// import SidebarItem from './SidebarItem'
import {datas} from '../Datas'
import { XIcon } from '@heroicons/react/outline'

const Sidebar = ({setOpen}) => {
   
  return (
     
    <div className=" flex flex-col w-[220px] h-screen bg-gray-700 text-white space-y-2 absolute top-0">
        <div className="flex items-center justify-between px-3 border-b border-gray-200 py-2">
        <p className="py-3 pl-2 text-lg ">Categories</p>
        <XIcon className="h-6 w-6 cursor-pointer "  onClick={()=>setOpen(false)}/>
        </div>
        {
            datas.map(category=>(
                
 <div className="hover:bg-gray-500 hover:rounded-tr hover:rounded-bt hover:rounded-lg cursor-pointer flex items-center pl-8 py-2 mx-1"  
  >
        <button className="text-lg"  onClick={(e)=>setCategorySelected(e.target.innerText.toLowerCase())}>{category}</button>
   {console.log(categorySelected)}
    </div>

            ))
        }
        
    </div>
      
  )
}

export default Sidebar