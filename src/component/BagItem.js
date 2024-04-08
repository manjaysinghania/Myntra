import { toast } from 'react-hot-toast';
import { Remove_add_Initial } from '../store/Slice';
import { useDispatch } from "react-redux";
import { MdAutoDelete } from "react-icons/md";
const BagItem = ({ items }) => { 
 
  const item = items;
  const dispatch = useDispatch();

  function removeFromCart() {
    dispatch(Remove_add_Initial(item.id));
    toast.error('Item removed from cart');
  }

  return (
    <div>
      <div className="bag-item-container">
        <div className="item-left-part">
          <img className="item-image" src={item.image} alt="itemimage"/>
        </div>
        <div className="item-right-part">
          <div className="company">{item.company}</div>
          <div className="item-name">{item.item_name}</div>
          <div className="price-container">
            <span className="current-price">Rs {item.current_price}</span>
            <span className="original-price">Rs {item.original_price}</span>
            <span className="discount-percentage">({item.discount_percentage}% OFF)</span>
          </div>
          <div className="return-period">
            <span className="return-period-days">{item.return_period} days</span> return available
          </div>
          <div className="delivery-details">
            Delivery by
            <span className="delivery-details-days">{item.delivery_date}</span>
          </div>
        </div>

        <div className="remove-from-cart" onClick={removeFromCart}><MdAutoDelete /></div>
      </div>
    </div>
  );
}

export default BagItem;
