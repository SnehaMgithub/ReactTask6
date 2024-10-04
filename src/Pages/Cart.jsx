import React from 'react';
import { Link } from 'react-router-dom';
import { CgAdd } from "react-icons/cg";
import { GrSubtractCircle } from "react-icons/gr";

const Cart = ({ cartItem, removeFromCart, updateQuantity }) => {
  const total = cartItem.reduce((acc, item) => acc + (item.quantity * item.price), 0);
  const discount = total * 0.10;
  const finalPrice = total - discount;
  return (
    <>
      <h2 className="text-lg font-semibold mb-4 p-3">Your Cart </h2>
      {cartItem.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="space-y-4">
          {cartItem.map(item => (
            
            <li key={item.id} className="flex justify-between items-center">
              <div className="flex items-center space-x-4 gap-3 ">
              <img className="h-36 w-36 p-3" src={item.image} alt={item.title} />
                <p className="text-sm w-52">{item.title}</p>
                <p className="text-sm">${item.price}</p>
                <div className="flex items-center p-3 space-x-2">
                  <button className=" px-2 py-1 rounded" onClick={() => updateQuantity(item.id, 'decrease')}>
                  <GrSubtractCircle />
                  </button>
                  <span>{item.quantity}</span>
                  <button className=" px-2 py-1 rounded" onClick={() => updateQuantity(item.id, 'increase')}>
                  <CgAdd />
                  </button>
                </div> 
               
              </div>
              <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 " onClick={() => removeFromCart(item.id)}>
                Remove
              </button>  
              <h1 className='p-5'>Item total: ${item.quantity * item.price}</h1>
            </li>
          ))}
        </ul>
      )}
    
      <p className='flex justify-end pr-5'> Total: ${total.toFixed(2)}</p>
      <p className='flex justify-end pr-5'> Discount: ${discount.toFixed(2)}</p>
      <hr></hr>
      <h1 className='flex justify-end pr-5'> Final Price:${finalPrice.toFixed(2)}</h1>
      <Link className=' text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' to="/">Back To Home</Link>
    </>
  );
};

export default Cart;
