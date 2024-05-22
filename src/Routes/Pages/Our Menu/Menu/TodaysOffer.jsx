import Button from "../../Components/Button/Button";
import SectionTitle from "../../Components/SectionTitle";
import MenuItem from "../../Home/PopularMenu/MenuItem";

const TodaysOffer = ({ menuItems }) => {
  const menuItem = menuItems.filter((item) => item.category === "popular");
  return (
    <div className="mt-20 ">
      <SectionTitle
        subtitle={"---Dont miss---"}
        title={"TODAY'S OFFER"}
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-xl mx-auto">
        {menuItem.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <Button text={"ORDER YOUR FAVOURITE FOOD"}></Button>
    </div>
  );
};

export default TodaysOffer;
