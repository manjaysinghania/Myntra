import Header from "../component/Header";
import Footer from "../component/Footer";

import { Outlet } from "react-router-dom";
function App() {
  
  
  return (
     <div>
         <Header/>
         <Outlet/>
         <Footer/>
     </div>
  );
}

export default App;
