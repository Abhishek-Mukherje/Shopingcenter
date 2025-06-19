import { useRef, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

function ProductZoom() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const zoomSliderBig = useRef(null);
  const zoomSliderSml = useRef(null);

  const goto = (index) => {
    setSliderIndex(index);

    // Ensure the Swiper instances are initialized before calling slideTo
    if (zoomSliderSml.current?.swiper) {
      zoomSliderSml.current.swiper.slideTo(index);
    }

    if (zoomSliderBig.current?.swiper) {
      zoomSliderBig.current.swiper.slideTo(index);
    }
  };

  return (
    <div className="flex gap-3">
      {/* Thumbnails Slider */}
      <div className="slider w-[15%]">
        <Swiper
          ref={zoomSliderSml}
          direction="vertical"
          slidesPerView={4}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="zoomProductSliderThums h-[55vh] overflow-hidden"
        >
          <SwiperSlide>
            <div
              className={`item cursor-pointer group ${
                sliderIndex === 0 ? "opacity-1" : "opacity-30"
              }`}
              onClick={() => goto(0)}
            >
              <img
                src="../fashion/img4.jpg"
                alt="Thumbnail 1"
                className="w-full transition-all group-hover:scale-105"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`item cursor-pointer group ${
                sliderIndex === 1 ? "opacity-1" : "opacity-30"
              }`}
              onClick={() => goto(1)}
            >
              <img
                src="../fashion/img9.jpg"
                alt="Thumbnail 2"
                className="w-full transition-all group-hover:scale-105"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`item cursor-pointer group ${
                sliderIndex === 2 ? "opacity-1" : "opacity-30"
              }`}
              onClick={() => goto(2)}
            >
              <img
                src="../fashion/img9.jpg"
                alt="Thumbnail 3"
                className="w-full transition-all group-hover:scale-105"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`item cursor-pointer group ${
                sliderIndex === 3 ? "opacity-1" : "opacity-30"
              }`}
              onClick={() => goto(3)}
            >
              <img
                src="../fashion/img9.jpg"
                alt="Thumbnail 4"
                className="w-full transition-all group-hover:scale-105"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Main Zoomed Image Slider */}
      <div className="zoomContainer w-[75%] h-[70vh] overflow-hidden">
        <Swiper
          ref={zoomSliderBig}
          direction="vertical"
          slidesPerView={1}
          spaceBetween={0}
          navigation={false}
          className="zoomProductSliderThums h-[70vh] mb-12"
        >
          <SwiperSlide>
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1.2}
              src="../fashion/img4.jpg"
              alt="Zoomed Image 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1.2}
              src="../fashion/img9.jpg"
              alt="Zoomed Image 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1.2}
              src="../fashion/img9.jpg"
              alt="Zoomed Image 3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1.2}
              src="../fashion/img9.jpg"
              alt="Zoomed Image 4"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default ProductZoom;
