import { useForm } from "react-hook-form";
import { ImSpoonKnife } from "react-icons/im";
import SectionTitle from "../../Components/SectionTitle";
import UseAxiosPublic from "./../../../../Hooks/UseAxiosPublic";
import UseAxiosSequre from "../../../../Hooks/UseAxiosSequre";
import Swal from "sweetalert2";

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = UseAxiosPublic();
  const axiosSequre = UseAxiosSequre();

  const image_hosting_key = import.meta.env.VITE_IMAGE_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: { "content-type": "multipart/form-data" },
    });

    //send menu item data in database
    if (res.data.success) {
      const menuInfo = {
        name: data.recepName,
        recipe: data.recipe,
        category: data.category,
        price: parseFloat(data.price),
        image: res.data.data.display_url,
      };
      const menuItem = await axiosSequre.post(`/menus`, menuInfo);

      //   insertedId
      if (menuItem.data.insertedId) {
        reset();
        Swal.fire({
          title: "Good job!",
          text: "You added the food!",
          icon: "success",
        });
      }
    }
  };

  return (
    <div className="mt-10">
      <SectionTitle
        subtitle={"---What's new?---"}
        title={"ADD AN ITEM"}
      ></SectionTitle>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-16 mt-10 p-6 bg-base-200"
      >
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text font-semibold">Recep Name*</span>
          </div>
          <input
            {...register("recepName")}
            type="recepName"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </label>

        <div className="flex gap-6 my-6">
          {/* category */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Category*</span>
            </div>
            <select
              defaultValue="default"
              {...register("category")}
              className="select select-bordered"
            >
              <option disabled value={"default"}>
                Category
              </option>
              <option value="drinks">Drinks</option>
              <option value="salad">Salad</option>
              <option value="dessert">Dessert</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
            </select>
          </label>

          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-semibold">Price*</span>
            </div>
            <input
              {...register("price")}
              type="number"
              placeholder="price"
              className="input input-bordered w-full "
            />
          </label>
        </div>
        {/* text area */}
        <label className="form-control">
          <div className="label">
            <span className="label-text font-semibold">Recipe Details</span>
          </div>
          <textarea
            {...register("recipe")}
            className="textarea textarea-bordered h-24"
            placeholder="recipe"
          ></textarea>
        </label>

        <input
          {...register("image")}
          type="file"
          className="file-input file-input-bordered file-input-info w-full max-w-xs my-6"
        />

        <div>
          <button className="btn bg-orange-400 font-semibold text-lg ">
            Add Item <ImSpoonKnife />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItems;
