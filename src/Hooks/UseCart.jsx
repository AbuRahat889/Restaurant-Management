import { useQuery } from "@tanstack/react-query";
import UseAxiosSequre from "./UseAxiosSequre";
import { useContext } from "react";
import { AuthContext } from "../Contex/AuthProvaider";

const UseCart = () => {
  //use ten stack query
  const axiosSequre = UseAxiosSequre();
  const { user } = useContext(AuthContext);
  const { refetch , data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSequre.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });
  return [cart,refetch];
};

export default UseCart;
