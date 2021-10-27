//React Modules
import React, { useState } from "react";

const News = () => {
    let [currentSlide, setCurrentSlide] = useState(0);
    let [lastExecution, setLastExecution] = useState(0);
    const delay = 1000;

    //Handles navigation arrows on slider, setting scrollLeft based on ".news__content-wrapper" width
    const handleArrowClick = (action) => {
        //Prevents user from calling function inside the delay range
        if (lastExecution + delay < Date.now()) {
            setLastExecution(Date.now());
            const newsLength = document.querySelectorAll(".news__content").length;
            switch (action) {
                case "nextSlide": {
                    if (currentSlide < newsLength - 1) {
                        document.querySelector(
                            ".news__content-wrapper"
                        ).scrollLeft += document
                            .querySelector(".news__content-wrapper")
                            .getBoundingClientRect().width;
                        setCurrentSlide(currentSlide + 1);
                    } else {
                        document.querySelector(
                            ".news__content-wrapper"
                        ).scrollLeft = 0;
                        setCurrentSlide(0);
                    }
                    break;
                }
                case "prevSlide": {
                    if (currentSlide === 0) {
                        document.querySelector(
                            ".news__content-wrapper"
                        ).scrollLeft +=
                            (newsLength - 1) *
                            document
                                .querySelector(".news__content-wrapper")
                                .getBoundingClientRect().width;
                        setCurrentSlide(newsLength - 1);
                    } else {
                        document.querySelector(
                            ".news__content-wrapper"
                        ).scrollLeft -= document
                            .querySelector(".news__content-wrapper")
                            .getBoundingClientRect().width;
                        setCurrentSlide(currentSlide - 1);
                    }
                    break;
                }
                default:
                    break;
            }
        }   
    };

    return (
        <section className="news">
            <h2 className="news__title">News</h2>
            <div className="news__content-wrapper">
                <p className="news__content">
                    Dolor pariatur quasi quidem laboriosam repudiandae Itaque
                    odit repudiandae quidem deserunt ratione Sint laudantium ea
                    voluptatum alias ratione id consequuntur. Laudantium sint
                    reiciendis voluptatum vel excepturi Perspiciatis est impedit
                    quis.
                </p>
                <p className="news__content">
                    Amet at iure veritatis optio cum? Dolorum veniam quis
                    necessitatibus recusandae similique sunt. Unde pariatur
                    explicabo debitis at rerum. Iure nobis vitae ducimus
                    quisquam doloremque? Necessitatibus eaque corrupti
                    consectetur quos
                </p>
                <p className="news__content">
                    Elit consectetur expedita dolore sed distinctio impedit.
                    Dicta dolore dolorum soluta aut neque, laudantium nam Animi
                    voluptatum tempore itaque illum nulla. Atque sequi ea
                    incidunt cumque quas iusto. Consequatur nostrum!
                </p>
            </div>
            <button
                onClick={() => handleArrowClick("prevSlide")}
                className="news__arrow-left"
            >
                <i className="fas fa-chevron-left"></i>
            </button>
            <button
                onClick={() => handleArrowClick("nextSlide")}
                className="news__arrow-right"
            >
                <i className="fas fa-chevron-right"></i>
            </button>
        </section>
    );
};

export default News;
