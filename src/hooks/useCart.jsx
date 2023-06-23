import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
const userCart=()=>{
   const {user,loading}=useAuth();

   const [axiosSecure]=useAxiosSecure()
   const { isLoading,refetch, isError, data:cart=[], error } = useQuery({
    queryKey: ['carts',user?.email],
    enabled:!loading,
    queryFn:async()=>{
        const response = await axiosSecure(`/carts?email=${user?.email}`)

        return response.data
    } ,
    
  })
  return[cart,refetch]
}

export default userCart