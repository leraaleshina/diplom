import Slider from "react-slick";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "./slider_card";

const Slick = () => {
  const [data, setData] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 1000,
  };

  useEffect(() => {
    fetch("http://localhost:3000/cards")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);
  if (!data) return null;
  return (
    <div className="App">
      <Slider {...settings}>
        {data.map((card) => (
          <SliderCard key={card.id} card={card} /> //в слайдер кард мы прокидываем пропсы которые будут отображаться в компоненте sliderCard, в данной строке card один из объектов массива который попадает через пропсы в компонент слайдерКард
        ))}
      </Slider>
    </div>
  );
};

export default Slick;
