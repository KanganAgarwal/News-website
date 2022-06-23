import React,{useContext} from 'react'
import {State} from "../Context"
const SidebarItem = ({category}) => {
    const {categorySelected,setCategorySelected} = useContext(State);
  return (
  //   <div className="hover:bg-gray-500 hover:rounded-tr hover:rounded-bt hover:rounded-lg cursor-pointer flex items-center pl-8 py-2 mx-1"  
  // >
  //       <button className="text-lg"  onClick={(e)=>setCategorySelected(e.target.innerText.toLowerCase())}>{category}</button>
  //  {console.log(categorySelected)}
  //   </div>
  )
}

export default SidebarItem