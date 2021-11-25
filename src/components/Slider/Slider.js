import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./Slider.css"
import sample1 from "../../images/sample1.jpg";

import SwiperCore, {
    Navigation,
    Pagination,
    Autoplay
} from "swiper/core";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Slider() {

    useEffect(() => {
        document.getElementsByClassName("swiper-pagination-progressbar-fill")[0].style = "background-color: yellow;"
    }, [])

    return (
        <Swiper
            cssMode={true}
            navigation={true}
            loop={true}
            autoplay={{
                "delay": 3000,
                "disableOnInteraction": false
            }}
            pagination={{
                "type": "progressbar"
            }}
            style={{ marginTop: "1px" }}
        >
            <SwiperSlide><img style={{ width: '100%', height: "auto" }} src={sample1} alt='s0'></img></SwiperSlide>
            <SwiperSlide><img style={{ width: '100%', height: "auto" }} src={sample1} alt='s1'></img></SwiperSlide>
            <SwiperSlide><img style={{ width: '100%', height: "auto" }} src={sample1} alt='s2'></img></SwiperSlide>
            <SwiperSlide><img style={{ width: '100%', height: "auto" }} src={sample1} alt='s3'></img></SwiperSlide>
            <SwiperSlide><img style={{ width: '100%', height: "auto" }} src={sample1} alt='s4'></img></SwiperSlide>
            <SwiperSlide><img style={{ width: '100%', height: "auto" }} src={sample1} alt='s5'></img></SwiperSlide>

        </Swiper>

    );
}
