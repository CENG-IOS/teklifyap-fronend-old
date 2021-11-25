import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import sample1 from "../../images/sample1.jpg";

import SwiperCore, {
    Navigation,
    Pagination,
    Autoplay,
    Mousewheel
} from "swiper/core";

SwiperCore.use([Navigation, Pagination, Autoplay, Mousewheel]);

export default function Slider() {

    useEffect(() => {
        document.getElementsByClassName("swiper-pagination-progressbar-fill")[0].style = "background-color: yellow;"
    }, [])

    return (
        <Swiper
            // cssMode={true}
            navigation={true}
            autoplay={{
                "delay": 2000,
                "disableOnInteraction": false
            }}
            pagination={{
                "type": "progressbar"
            }}
            slidesPerView={2}
            centeredSlides={true}
            spaceBetween={50}
            mousewheel={false}

            id="home-slider"
            style={{ marginTop: "2px" }}
        >
            <SwiperSlide><img src={"https://picsum.photos/id/5/1024/768"} alt='s0'></img></SwiperSlide>
            <SwiperSlide><img src={"https://picsum.photos/id/4/1024/768"} alt='s1'></img></SwiperSlide>
            <SwiperSlide><img src={"https://picsum.photos/id/3/1024/768"} alt='s2'></img></SwiperSlide>
            <SwiperSlide><img src={"https://picsum.photos/id/2/1024/768"} alt='s3'></img></SwiperSlide>
            <SwiperSlide><img src={"https://picsum.photos/id/1/1024/768"} alt='s4'></img></SwiperSlide>
            <SwiperSlide><img src={"https://picsum.photos/id/6/1024/768"} alt='s5'></img></SwiperSlide>
        </Swiper>

    );
}
