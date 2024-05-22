import Button from "../../Components/Button/Button";
import Cover from "../../Components/Cover/Cover";
import MenuItem from "../../Home/PopularMenu/MenuItem";
import image from "../../../../assets/menu/salad-bg.jpg";

const Salad = ({ menuItems }) => {
  const saladItem = menuItems.filter((item) => item.category === "salad");
  const menuItem = saladItem.splice(0, 6);
  return (
    <div className="mt-10">
      <Cover
        img={image}
        title={"SALADS"}
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
      ></Cover>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-xl mx-auto">
        {menuItem.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <Button text={"ORDER YOUR FAVOURITE FOOD"}></Button>
    </div>
  );
};

export default Salad;
