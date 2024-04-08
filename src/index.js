import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import Home from './pages/Home';
import Bag from './pages/Bag';

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store/store';
import { Toaster } from "react-hot-toast";
import Final from './component/Final';

const router=createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[{
    path:"/Home",
    element:<Home/>
  },{
    path:"/Bag",
    element:<Bag/>
  },
  {
    path:"/Final",
    element:<Final/>
  },]
}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
  <RouterProvider router={router}/>  
  <Toaster/>
</Provider>
 
);
