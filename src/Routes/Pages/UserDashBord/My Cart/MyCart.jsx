import { MdDelete } from "react-icons/md";
import UseCart from "../../../../Hooks/UseCart";
import SectionTitle from "../../Components/SectionTitle";
import UseAxiosSequre from "../../../../Hooks/UseAxiosSequre";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart,refetch] = UseCart();
  const axiosSequre = UseAxiosSequre();

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
        axiosSequre.delete(`/carts/${id}`).then((res) => {
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

  const sum = cart.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price,
    0
  );
  
  return (
    <div className="mt-10">
      <SectionTitle
        subtitle={"---My Cart---"}
        title={"WANNA ADD MORE?"}
      ></SectionTitle>

      <div className="flex justify-evenly my-8">
        <h1 className="text-4xl">Total orders: {cart.length} </h1>
        <h1 className="text-4xl">total price: {sum} </h1>
        <button className="btn bg-[#d1a054]">Pay</button>
      </div>
      
      <div className="overflow-x-auto px-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, index) => (
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
                <td>{item.price}</td>
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

export default MyCart;
