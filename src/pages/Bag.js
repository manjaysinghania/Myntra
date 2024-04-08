import BagItem from "../component/BagItem";
import BagSummary from "../component/BagSummary";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Bag() {
  const { items } = useSelector((state) => state);
  console.log(items);

  return (
    <div>
      <main>
        <div className="bag-page">
          {items.length > 0 ? (
           
             <div> 
             <div className="bag-items-container">
                    {items.map((item, index) => (
                      <div key={index}>
                        <BagItem items={item} />
                      </div>
                    ))}
                </div>
             
                  <div className="bag-summary">
                    <BagSummary />
                  </div>
                
              </div>
               
                
              
           
         
          ) : (
            <center className="cart-empty">
              <h1 className="cart">Cart Empty</h1>
              <NavLink to="/Home">
                <button className="btn-add-bag">
                  Shop Now
                </button>
              </NavLink>
            </center>
          )}
          </div>
      </main>
    </div>
  );
}

export default Bag;
