import Homeitems from "../component/Homeitems"
import Spinner from "../component/Spinner";


import { useEffect,useState } from "react"


function Home(){

  const [loading,setloading]=useState(false);
  const[posts,setposts]=useState([])

  async function fetchdata(){
    setloading(true)
    try{  
      const output=await fetch("https://myntra-1.vercel.app/items")
      const data=await output.json()
      
       setposts(data.items[0])
       
      }
    catch(error){
      console.log('error aa gyaaa')
      setposts([])
    }
    setloading(false)
  }
  useEffect(()=>{
       fetchdata()
      
  },[])
  return(<div>
           <main>
              <div className="items-container">
              {
                 loading?(<Spinner/>):
                 (posts.length>0)?
                  (posts.map((item)=>{
                    console.log(item)
                    return(<Homeitems key={item.id} item={item}/>)
                  })):(<center>No Data Found</center>)
              }
              
              </div>
          </main>
  </div>)
}
export default Home
