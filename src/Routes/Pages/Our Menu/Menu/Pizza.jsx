import Cover from "../../Components/Cover/Cover";
import MenuItem from "../../Home/PopularMenu/MenuItem";
import image from '../../../../assets/menu/pizza-bg.jpg'
import Button from "../../Components/Button/Button";

const Pizza = ({ menuItems }) => {
  const pizzaItem = menuItems.filter((item) => item.category === "pizza");
  const menuItem = pizzaItem.splice(0, 6);

  return (
    <div>
        <Cover 
        img={image}
        title={'PIZZA'}
        subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
        ></Cover>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-xl mx-auto">
        {menuItem.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <Button text={'ORDER YOUR FAVOURITE FOOD'}></Button>
    </div>
  );
};

export default Pizza;
