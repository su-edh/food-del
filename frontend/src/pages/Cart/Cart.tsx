import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart mt-24">
      <div className="cart-items">
        <div className="cart-items-title grid ">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item my-2 mx-0 text-black ">
                  <img className="w-12" src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => removeFromCart(item._id)}
                    className="cross cursor-pointer"
                  >
                    x
                  </p>
                </div>
                <hr className="h-px border-none" />
              </div>
            );
          }
        })}
      </div>

      <div className="cart-bottom mt-20 flex justify-between">
        <div className="cart-total flex-1 flex-col gap-5">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details mb-4">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')} className="border-none text-white py-3 px-0 rounded cursor-pointer">
            PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode flex-1">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input mt-2 flex justify-between items-center rounded">
              <input className="bg-transparent border-none outline-none pl-2" type="text" placeholder="promo code"></input>
              <button className="py-3 px-1 bg-black border-none text-white rounded">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
