import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Contex/AuthProvaider";
import UseAxiosSequre from "./UseAxiosSequre";

const UseAdmin = () => {
  const { user } = useContext(AuthContext);
  const axiosSequre = UseAxiosSequre();
  const { data: isAdmin , isPending : isAdminLoading} = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const res = await axiosSequre.get(`/users/admin/${user.email}`);
      console.log("this is admin informaton : ", res.data);
      return res.data?.admin;
    },
  });
  return [isAdmin,isAdminLoading];
};

export default UseAdmin;
