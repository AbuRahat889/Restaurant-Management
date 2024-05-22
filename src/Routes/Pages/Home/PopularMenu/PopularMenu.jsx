import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import MenuItem from "./MenuItem";
import Button from "../../Components/Button/Button";

const PopularMenu = () => {
  const [menuItem, setMenuItem] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SITE_Link}/menus`)
      .then((res) => res.json())
      .then((data) => {
        const populer = data.filter((item) => item.category === "popular");
        setMenuItem(populer);
      });
  }, []);

  return (
    <div className="mt-16 max-w-screen-xl mx-auto">
      <SectionTitle
        subtitle="---Check it out---"
        title="FROM OUR MENU"
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {menuItem.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <Button text={"View Full Menu"}></Button>
    </div>
  );
};

export default PopularMenu;
