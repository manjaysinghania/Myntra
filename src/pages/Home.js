import Homeitems from "../component/Homeitems"

import items from '../items'





function Home(){

  
  return(<div>
           <main>
              <div className="items-container">
              {
                
                 (items.length>0)?
                  (items.map((item)=>{
                    console.log(item)
                    return(<Homeitems key={item.id} item={item}/>)
                  })):(<center>No Data Found</center>)
              }
              
              </div>
          </main>
  </div>)
}
export default Home
