import {Item_add_Initial,Remove_add_Initial} from '../store/Slice'
import{useSelector,useDispatch} from 'react-redux'
import  { toast } from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { IoBagAdd } from "react-icons/io5";

function Homeitems({item}){
 const {items}=useSelector((state)=>state)

 const dispatch=useDispatch()

function addtocart(){
  dispatch(Item_add_Initial(item))
  toast.success('item added to cart')
}
function removetocart(){
  dispatch(Remove_add_Initial(item.id))
  toast.error('item removed to cart')
}

  return(<div>
      <div className="item-container">
      <img className="item-image" src={item.image} alt="itemimage"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      
      {
        items.some((p)=>p.id===item.id) ?( <button className="btn-remove-bag" onClick={removetocart}>Remove from Bag <MdDelete /></button>):( <button className="btn-add-bag" onClick={addtocart}>Add to Bag <IoBagAdd /></button>
       )
      }
    </div>
  </div>)
}
export default Homeitems