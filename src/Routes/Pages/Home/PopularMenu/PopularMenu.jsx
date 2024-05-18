import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import MenuItem from "./MenuItem";


const PopularMenu = () => {
const [menuItem, setMenuItem] = useState([]);

    useEffect(()=>{
        fetch(`FakeData/menu.json`)
        .then(res=>res.json())
        .then(data =>{
            const populer = data.filter(item=>item.category === 'popular');
            setMenuItem(populer);
        })
    },[])

    return (
        <div className="mt-16 max-w-screen-xl mx-auto">
            <SectionTitle
            subtitle="---Check it out---"
            title="FROM OUR MENU"
            ></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {
                menuItem.map(item=><MenuItem
                key={item._id}
                item={item}
                ></MenuItem>)
            }
            </div>

            <div className="text-center my-5 ">
                <button className="px-5 py-1 h-auto border-black border-b-2 rounded-xl text-2xl">View Full Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;