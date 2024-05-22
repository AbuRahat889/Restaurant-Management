import SectionTitle from "../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const Testimoniyal = () => {
  const [loader, setLoader] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SITE_Link}/reviews`)
      .then((res) => res.json())
      .then((data) => {
        setLoader(data);
      });
  }, []);

  return (
    <div className="my-20  max-w-screen-xl mx-auto">
      <SectionTitle
        subtitle="---What Our Clients Say---"
        title="TESTIMONIALS"
      ></SectionTitle>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper px-10"
      >
        {loader.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="px-32 flex flex-col justify-center items-center mt-10">
              <Rating style={{ maxWidth: 180 }} value={item.rating} readOnly />
              <FaQuoteLeft className="text-7xl my-10" />
              <p className="text-xl text-center text-balance">{item.details}</p>
              <h1 className="text-4xl text-yellow-500 mt-5">{item.name}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimoniyal;
