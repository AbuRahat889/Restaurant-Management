import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import Card from "../../Components/Card/Card";

const CardSection = () => {
  const [loader, setLoader] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SITE_Link}/menus`)
      .then((res) => res.json())
      .then((data) => {
        const salad = data.filter((item) => item.category === "salad");
        setLoader(salad);
      });
  }, []);

  //spliec data for only 3 information
  const saladInfo = loader.splice(0, 3);
  return (
    <div className="mt-20 max-w-screen-xl mx-auto">
      <SectionTitle
        subtitle="---Should Try---"
        title="CHEF RECOMMENDS"
      ></SectionTitle>

      <div className="flex flex-col justify-center items-center md:justify-around md:flex-row gap-5 mt-10">
        {saladInfo.map((item) => (
          <Card key={item._id} item={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
