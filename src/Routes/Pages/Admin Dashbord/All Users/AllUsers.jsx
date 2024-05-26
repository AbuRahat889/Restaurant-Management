import { useQuery } from "@tanstack/react-query";
import UseAxiosSequre from "../../../../Hooks/UseAxiosSequre";
import SectionTitle from "../../Components/SectionTitle";
import { FaUsers } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSequre = UseAxiosSequre();

  //load user information
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSequre.get(`/users`);
      return res.data;
    },
  });

  //handle delete button
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
        axiosSequre.delete(`/users/${id}`).then((res) => {
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

  //handle make admin
  const handleAdmin = (id) => {
    axiosSequre
      .patch(`/users/admin/${id}`)
      .then((res) => {
        // console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${users.name} is admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mt-10">
      <SectionTitle
        subtitle={"---Hurry Up!---"}
        title={"MANAGE ALL ITEMS"}
      ></SectionTitle>

      <div className="overflow-x-auto">
        <h1 className="text-3xl font-bold my-2">
          Total Users : {users.length}{" "}
        </h1>
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[#d1a054] text-white text-xl ">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="text-lg">
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td onClick={() => handleAdmin(user._id)}>
                  {user.role == "admin" ? (
                    "admin"
                  ) : (
                    <FaUsers className="text-4xl text-white bg-[#d1a054] p-3 size-12 rounded-lg" />
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className=" text-4xl hover:text-red-600"
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
