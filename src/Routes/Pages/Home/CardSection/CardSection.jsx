import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";

const CardSection = () => {
  const [loader, setLoader] = useState([]);

  useEffect(() => {
    fetch(`FakeData/menu.json`)
      .then((res) => res.json())
      .then((data) => {
        const salad = data.filter((item) => item.category === "salad");
        setLoader(salad);
      });
  }, []);

  //spliec data for only 3 information
  const saladInfo = loader.splice(0, 3);
  return (
    <div className="mt-20">
      <SectionTitle
        subtitle="---Should Try---"
        title="CHEF RECOMMENDS"
      ></SectionTitle>

      <div className="flex justify-around gap-5 mt-10">
        {saladInfo.map((item) => (
          <div key={item._id}>
            <div className="card card-compact w-96 bg-base-200 shadow-xl rounded-none ">
              <figure>
                <img
                className="w-full"
                  src={item.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body text-center mt-4">
                <h2 className="card-title flex justify-center text-2xl">{item.name}</h2>
                <p className="text-lg font-semibold px-10">If a dog chews shoes whose shoes does he choose?</p>

                <div className="card-actions justify-center py-4">
                  <button className="bg-base-300 px-8 py-3 text-xl font-semibold rounded-lg  border-b-2 border-yellow-600 text-yellow-600 hover:bg-slate-700 hover:border-none ">ADD TO CART</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
