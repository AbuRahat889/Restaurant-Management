import { Helmet } from "react-helmet-async";
import Action from "./Action/Action";
import Banner from "./Banner/Banner";
import CallSection from "./CallSecton/CallSection";
import CardSection from "./CardSection/CardSection";
import Category from "./Category/Category";
import Featured from "./FeturedSection/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimoniyal from "./Testimoniyal/Testimoniyal";


const Home = () => {
    return (
        <div>
            <Helmet><title>Bistro-Boss | Home</title></Helmet>
              <Banner></Banner>
              <Category></Category>
              <Action></Action>
              <PopularMenu></PopularMenu>
              <CallSection></CallSection>
              <CardSection></CardSection>
              <Featured></Featured>
              <Testimoniyal></Testimoniyal>
        </div>
    );
};

export default Home;