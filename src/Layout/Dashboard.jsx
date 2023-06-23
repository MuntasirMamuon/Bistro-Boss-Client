import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendar,
  FaCalendarAlt,
  FaHome,
  FaUtensils,
  FaBook,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import userCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {
    const[cart]=userCart()

//  TODO : load data from the server to have dynamic 
    // const isAdmin=true;
    const [isAdmin]=useAdmin()
    console.log(isAdmin);
  return (
    <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-[#D1A054] ">


          {
             
             isAdmin ? <>
              <li>
            <NavLink  to='/dashboard/adminHome'>
              <FaHome />
            Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink  to='/dashboard/addItem'>
              <FaUtensils />
             Add Items
            </NavLink>
          </li>
          <li>
            <NavLink  to='/dashboard/manageItem'>
              <FaWallet />
             Manage Items
            </NavLink>
          </li>
          <li>
            <NavLink  to='/dashboard/history'>
              <FaBook />
             Manage Bookings
            </NavLink>
          </li>
          <li>
            <NavLink  to='/dashboard/allUsers'>
              <FaUsers />
            All Users
            </NavLink>
          </li>
        
             
             </> :<>
              <li>
            <NavLink  to='/dashboard/userHome'>
              <FaHome />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink  to='/dashboard/reservation'>
              <FaCalendarAlt />
              Reservations
            </NavLink>
          </li>
          <li>
            <NavLink  to='/dashboard/history'>
              <FaWallet />
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/mycart'>
              <FaShoppingCart />
              My Cart
              <div className="badge  badge-secondary">+{cart?.length}</div>
            </NavLink>
          
          </li>
             </>

          }
         

          <div className="divider"></div>
          <li>
            <NavLink to='/'>
              <FaHome />
              Home
            </NavLink>
          </li>

         
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
