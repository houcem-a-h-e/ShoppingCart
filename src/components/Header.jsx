import { Link } from "react-router-dom";
import iconCart from '../assets/images/iconCart.png';
import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { toggleStatusTab } from "../stores/Cart";

const Header = () => {
  const [total,setTotal] =useState(0);
  const carts=useSelector((state)=>state.cart.items);
  const dispatch=useDispatch();
  useEffect(()=>{
    let total=0;
    carts.forEach(item=>total+=item.quantity);
    setTotal(total);
  },[carts]);
  const handleOpenTabCart=()=>{
    dispatch(toggleStatusTab());
  }
  return (
    <header className="flex justify-between items-center mb-5">
      <Link to="/" className="text-xl font-semibold">Home</Link>
      <div className="w-10 bg-gray-100 rounded-full 
      flex justify-center items-center relative" onClick={handleOpenTabCart}>
        <img src={iconCart} alt="" className="w-6" />
        <span className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm
        w-5 h-5 rounded-full flex justify-center items-center">{total}</span>
      </div>
    </header>
  )
}
export default Header