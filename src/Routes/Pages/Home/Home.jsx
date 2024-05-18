import Action from "./Action/Action";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import PopularMenu from "./PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
              <Banner></Banner>
              <Category></Category>
              <Action></Action>
              <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;