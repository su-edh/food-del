import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
const PlaceOrder = () => {
    const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form className="place-order flex items-start justify-between gap-12 mt-24">
      <div className="place-order-left w-full">
        <p className="title text-3xl font-semibold mb-12">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="text" placeholder="Email address"/>
        <input type="text" placeholder="Street"/>
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="County" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>

      <div className="place-order-right w-full">
      <div className="cart-total flex-1 flex-col gap-5">
          <h2 className="text-2xl font-semibold pb-3">Cart Totals</h2>
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
          <button className="border-none text-white py-3 px-0 rounded cursor-pointer">
            PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
