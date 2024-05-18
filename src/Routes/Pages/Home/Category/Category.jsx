import img1 from "../../../../assets/home/slide1.jpg";
import img2 from "../../../../assets/home/slide2.jpg";
import img3 from "../../../../assets/home/slide3.jpg";
import img4 from "../../../../assets/home/slide4.jpg";
import img5 from "../../../../assets/home/slide5.jpg";
import SectionTitle from "../../Components/SectionTitle";

const Category = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-12">
      <SectionTitle
      subtitle={"---From 11:00am to 10:00pm---"}
      title={"ORDER ONLINE"}
      
      ></SectionTitle>
      <div className="carousel carousel-end rounded-box mt-8">
        <div className="carousel-item relative">
          <img src={img1} alt="Drink" />
          <h2 className="absolute bottom-10 right-20 text-3xl text-base-200">
            SALAD
          </h2>
        </div>
        <div className="carousel-item relative mx-5">
          <img src={img2} alt="Drink" />
          <h2 className="absolute bottom-10 right-20 text-3xl text-base-200">
            PIZZA
          </h2>
        </div>
        <div className="carousel-item relative">
          <img src={img3} alt="Drink" />
          <h2 className="absolute bottom-10 right-20 text-3xl text-base-200">
            SOUPS
          </h2>
        </div>
        <div className="carousel-item relative mx-5">
          <img src={img4} alt="Drink" />
          <h2 className="absolute bottom-10 right-20 text-3xl text-base-200">
          DESSERTS
          </h2>
        </div>
        <div className="carousel-item relative">
          <img src={img5} alt="Drink" />
          <h2 className="absolute bottom-10 right-20 text-3xl text-base-200">
            SALAD
          </h2>
        </div>
        <div className="carousel-item relative ml-5">
          <img src={img3} alt="Drink" />
          <h2 className="absolute bottom-10 right-20 text-3xl text-base-200">
          SOUPS
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Category;
