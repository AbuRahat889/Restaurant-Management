import Action from "./Action/Action";
import Banner from "./Banner/Banner";
import CallSection from "./CallSecton/CallSection";
import CardSection from "./CardSection/CardSection";
import Category from "./Category/Category";
import Featured from "./FeturedSection/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
              <Banner></Banner>
              <Category></Category>
              <Action></Action>
              <PopularMenu></PopularMenu>
              <CallSection></CallSection>
              <CardSection></CardSection>
              <Featured></Featured>
        </div>
    );
};

export default Home;