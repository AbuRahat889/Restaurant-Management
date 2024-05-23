import { useContext } from "react";
import { AuthContext } from "../../../../Contex/AuthProvaider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosSequre from "../../../../Hooks/UseAxiosSequre";
import UseCart from "../../../../Hooks/UseCart";

const Card = ({ item }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSequre = UseAxiosSequre();
  const [, refetch] = UseCart();

  const handleAddCard = (food) => {
    if (user && user.email) {
      //to do somthing
      const cartInformation = {
        menuId: item._id,
        email: user.email,
        name: item.name,
        image: item.image,
        price: item.price,
      };
      console.log(cartInformation);
      // http://localhost:5000
      //${import.meta.env.VITE_SITE_Link}
      axiosSequre
        .post(`/carts`, cartInformation)
        .then((res) => {
          console.log(res.data);

          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${item.name} Added to Cart`,
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        })
        .catch((error) => console.log(error));
    } else {
      Swal.fire({
        title: "You are not Logged in",
        text: "Please, Login to add to the card",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, LogIn!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signin", { state: { form: location } });
        }
      });
    }
  };

  return (
    <div>
      <div className="card card-compact w-96 bg-base-200 shadow-xl rounded-none ">
        <figure>
          <img className="w-full" src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body text-center mt-4">
          <h2 className="card-title flex justify-center text-2xl">
            {item.name}
          </h2>
          <p className="text-lg font-semibold px-10">{item.recipe}</p>

          <div className="card-actions justify-center py-4">
            <button
              onClick={() => handleAddCard(item)}
              className="bg-base-300 px-8 py-3 text-xl font-semibold rounded-lg  border-b-2 border-yellow-600 text-yellow-600 hover:bg-slate-700 hover:border-none "
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
