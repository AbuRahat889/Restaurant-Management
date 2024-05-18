import featured from "../../../../assets/home/featured.jpg";
import SectionTitle from "../../Components/SectionTitle";
import './featuredImage.css'

const Featured = () => {
  return (
    <div className="featuredImage bg-fixed">
      <div className="mt-10 pt-10 text-white bg-black bg-opacity-50">
        <SectionTitle
          subtitle="---Check it out---"
          title="FROM OUR MENU"
        ></SectionTitle>
        <div className="flex items-center justify-center gap-8 px-40 py-8 pb-12">
          <img className="w-96" src={featured} alt="" />
          <div >
            <h1 className="text-lg ">March 20, 2023</h1>
            <h1 className="text-xl">WHERE CAN I GET SOME?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rem fugiat, dolore molestiae, optio delectus repellat incidunt consequatur exercitationem modi odit, quia ab. Nesciunt praesentium dolores laboriosam reprehenderit repudiandae nihil et officia ratione commodi eius, atque assumenda sed. Voluptatum temporibus debitis vel quod, delectus libero sunt sed corporis reiciendis ullam!</p>
            <button className=" px-8 py-3 text-xl font-semibold rounded-lg text-white border-b-4 hover:bg-slate-700 hover:border-slate-700 ">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
