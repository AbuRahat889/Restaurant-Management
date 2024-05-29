import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Components/SectionTitle";
import UseAxiosPublic from "../../../../Hooks/UseAxiosPublic";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxiosSequre from "../../../../Hooks/UseAxiosSequre";

const ManageItems = () => {
  const axiosPublic = UseAxiosPublic();
  const axiosSequre = UseAxiosSequre();

  //fetch data by tenStack query
  const { data: menuItem = [], refetch } = useQuery({
    queryKey: ["menus"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/menus`);

      return res.data;
    },
  });
  console.log("this is all menu data: ", menuItem);

  //handleDelete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSequre.delete(`/menus/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };



  return (
    <div className="mt-10">
      <SectionTitle
        subtitle={"---Hurry Up!---"}
        title={"MANAGE ALL ITEMS"}
      ></SectionTitle>

      <h1 className="text-3xl font-semibold my-4">
        Total Item : {menuItem.length}{" "}
      </h1>
      {/* all item tables */}
      <div className="overflow-x-auto px-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {menuItem.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <FaEdit></FaEdit>
                </td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className=" text-xl hover:text-red-600"
                  >
                    <MdDelete />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
