import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Slider from "../components/Slider/Slider";
import { About } from "../components/About";
import { Vision } from "../components/Vision";
import { Team } from "../components/Team";
import { ScrollAnimation } from "../components/Animations/ScrollAnimation";
import { GetPath } from "../components/Animations/ScrollToTop";
export default function Home() {

    useEffect(() => {
        ScrollAnimation();
    }, [GetPath()]);

    return (
        <>
            <div className="container-fluid p-0 m-0 position-relative user-select-none bg-light-custom">
                <div className="m-0 p-0 ">
                    <Slider />
                </div>

                <div className="m-0 p-0 ">
                    <About />
                </div>
                <div className="mt-5 pt-5">
                    <Team />
                </div>
                <div className="mt-5 pt-5 pb-5">
                    <Vision />
                </div>
            </div>
            <div className="bg-light-custom">
                <Footer />
            </div>
        </>
    );
};
