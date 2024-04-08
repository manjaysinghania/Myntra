import {useSelector} from 'react-redux'
import {useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
function BagSummary(){
       const {items}=useSelector((state)=>state)
       const[totalAmount,settotalAmount]=useState(0);
  
       useEffect(()=>{
         settotalAmount(items.reduce((acc,curr)=>acc+curr.current_price,0));
       },[items])
        const totalpayment=totalAmount-99;

  return(
    <div>
        <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({items.length} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{totalAmount}</span>
    </div>
   
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">-₹99</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{totalpayment}</span>
    </div>
  </div>
  
  <NavLink to="/Final"><button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
   </button>
  </NavLink>
    </div>
  )
}
export default BagSummary