import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import userCart from "../../hooks/useCart";

const FoodCard = ({item}) => {
    const {name,recipe,image,price,_id}=item;
    const {user}=useContext(AuthContext)
    const [,refetch]=userCart()
    const navigate=useNavigate();
    const location=useLocation()
    const handleAddToCart=item=>{
           console.log(item);
           if(user && user?.email){
            const cartItem={menuItemId:_id,name,image,price,email:user.email}
            fetch('https://bistro-boss-server-lemon-six.vercel.app/carts',{
              method:"POST",
              headers:{
                'content-type':'application/json'
              },
              body:JSON.stringify(cartItem)
            })
            .then(res=>res.json())
            .then(data=>{
              if(data.insertedId){
                refetch()
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Food added on the cart',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
            })
           }else{
            Swal.fire({
              title: 'Please login to order the food',
              
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Login Now'
            }).then((result) => {
              if (result.isConfirmed) {
               navigate('/login',{state:{from:location}})
              }
            })
           }
    }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>

      <p className="bg-slate-900 right-0  mr-4 mt-4 px-4 text-white absolute">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>handleAddToCart(item)} className='btn btn-outline border-orange-400 bg-slate-200 border-0 border-b-4 mt-4'>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
