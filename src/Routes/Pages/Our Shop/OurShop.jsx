import Cover from "../Components/Cover/Cover";
import image from "../../../assets/shop/banner2.jpg";
import "./OurShop.css";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { useEffect, useState } from "react";
import Card from "../Components/Card/Card";

const OurShop = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [loader, setLoader] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SITE_Link}/menus`)
      .then((res) => res.json())
      .then((data) => {
        setLoader(data);
      });
  }, []);

  //filter by category name
  const soupsInfo = loader.filter((item) => item.category === "soup");
  const saladInfo = loader.filter((item) => item.category === "salad");
  const pizzaInfo = loader.filter((item) => item.category === "pizza");
  const dessertsInfo = loader.filter((item) => item.category === "dessert");
  const drinksInfo = loader.filter((item) => item.category === "drinks");
  return (
    <div className="">
      <Cover
        img={image}
        title={"Our Shop"}
        subtitle={"Would you like to try a dish?"}
      ></Cover>

      <Tabs
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        className="max-w-screen-xl mx-auto text-center mt-10"
      >
        <TabList className="text-xl">
          <Tab>desserts</Tab>
          <Tab>salad</Tab>
          <Tab>pizza</Tab>
          <Tab>soups</Tab>
          <Tab>drinks</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            {dessertsInfo.map((item) => (
              <Card key={item._id} item={item}></Card>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            {saladInfo.map((item) => (
              <Card key={item._id} item={item}></Card>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            {pizzaInfo.map((item) => (
              <Card key={item._id} item={item}></Card>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          {/* react-tabs__tab--selected */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            {soupsInfo.map((item) => (
              <Card key={item._id} item={item}></Card>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            {drinksInfo.map((item) => (
              <Card key={item._id} item={item}></Card>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurShop;
