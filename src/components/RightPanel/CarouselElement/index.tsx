import Slider from "react-slick";
import { ICarouselElement } from "@/store/elements";

interface CarouselElementProps {
  element: ICarouselElement;
}

export default function CarouselElement(props: CarouselElementProps) {
  const { element } = props;
  const { width, height, urls } = element;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="slider-container">
      <div
        style={{
          width,
        }}
      >
        <Slider {...settings}>
          {urls.map((url, index) => (
            <div key={index}>
              <img src={url} style={{ height: height }} alt="image" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
