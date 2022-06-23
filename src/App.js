import Navbar from "./components/Navbar";
import NewsContent from "./components/NewsContent";
import {useEffect,useState} from "react"
function App() {
  const [categorySelected,setCategorySelected]=useState("General");
const [news,setNews]=useState([])
 
  
 useEffect(() => {
  const getContent=async()=>{
    const res=await fetch(`https://newsapi.org/v2/top-headlines?category=${categorySelected}&language=en&apiKey=a1aa88bccdc24c20952df47ef92003f0`);
     const data=await res.json();
     const datas=await data.articles;
  //  console.log(datas);
     setNews([...datas]);
     
   return data;
   }
 getContent();
    
    }, [categorySelected])

 
  return (
   
    <div className="h-screen w-screen"  >
     <Navbar categorySelected={categorySelected} setCategorySelected={setCategorySelected} />
   {news ? (
 <div className=" w-screen mx-auto overflow-y-scroll mt-4 max-h-[80%]">
  <h1 className="text-center font-bold text-base md:text-lg mt-2 mb-4">Top {categorySelected} Headlines</h1>
 {news.map(item=>(
   <NewsContent newsone={item} key={item.title}/>
 ))}
  </div> 
   ):(
     <div>loading...</div>
   )}
   
  

  </div>
  
   
  );
}

export default App;
