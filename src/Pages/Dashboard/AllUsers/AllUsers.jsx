import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  // const {data:users=[],refetch}=useQuery(['users'],async()=>{
  //     const res=fetch('https://bistro-boss-server-lemon-six.vercel.app/users')
  //     return res.json();
  // })
   const [axiosSecure]=useAxiosSecure()
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });
 const handleMakeAdmin=user=>{
  fetch(`https://bistro-boss-server-lemon-six.vercel.app/users/admin/${user._id}`,{
    method:'PATCH'
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.modifiedCount){
      refetch()
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title:`${user.name} is an Admin now` ,
        showConfirmButton: false,
        timer: 1500
      })
    }
  })
 }
  const handleDelete=user=>{

  }
  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss| myCart</title>
      </Helmet>

      <h3 className="text-3xl text-center font-semibold my-4">Total User:{users.length}</h3>
      <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {

        users.map((user,index)=> <tr
        key={user._id}
        >
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role ==='admin' ? 'admin' :
              <button onClick={()=>handleMakeAdmin(user)} className="btn  text-white bg-orange-600 btn-ghost "> <FaUserShield/></button>

            
           }</td>
            <td><td>
                  <button onClick={()=>handleDelete(user)} className="btn  text-white bg-red-600 btn-ghost "><FaTrashAlt/></button>
                </td></td>
          </tr>)
    }
     
     
    </tbody>
  </table>
</div>
    </div>
  );
};

export default AllUsers;
