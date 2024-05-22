import Cover from "../../Components/Cover/Cover";
import image from "../../../../assets/menu/banner3.jpg";
import TodaysOffer from "./TodaysOffer";
import { useEffect, useState } from "react";
import DessertsSection from "./DessertsSection";
import Pizza from "./Pizza";
import Salad from "./Salad";
import Soups from "./Soups";
import { Helmet } from "react-helmet-async";

const Menu = () => {
  const [menuItem, setMenuItem] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SITE_Link}/menus`)
      .then((res) => res.json())
      .then((data) => {
        // const populer = data.filter(item=>item.category === 'popular');
        setMenuItem(data);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Bistro-Boss | Our Menu </title>
      </Helmet>
      <Cover
        img={image}
        title={"OUR MENU"}
        subtitle={"Would you like to try a dish?"}
      ></Cover>

      <TodaysOffer menuItems={menuItem}></TodaysOffer>

      <DessertsSection menuItems={menuItem}></DessertsSection>

      <Pizza menuItems={menuItem}></Pizza>

      <Salad menuItems={menuItem}></Salad>

      <Soups menuItems={menuItem}></Soups>
    </div>
  );
};

export default Menu;
