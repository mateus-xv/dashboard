//React Modules
import React, { useEffect } from "react";

//API Async Function
import getNews from "utils/getNews";

const Topics = () => {
    //Returns the className based on the hash
    const urlCheckClass = () => {
        const path = window.location.hash;
        return path === "#/feed" ? "topics--feed" : "topics";
    };

    //Redirects to feed page if clicked on home
    const urlCheckRedirect = () => {
        const path = window.location.hash;
        if (path === "#/") window.location.hash = "#/feed";
    };

    useEffect(() => {
        document.querySelectorAll(".topics__button").forEach((button) => {
            button.addEventListener("click", () => {
                urlCheckRedirect();
            });
        });
    }, []);

    return (
        <section className={urlCheckClass()}>
            <h2 className="topics__title">Topics</h2>
            <ul className="topics__container">
                <li onClick={() => getNews("arts")} className="topics__single">
                    <button className="topics__button">Arts</button>
                </li>
                <li className="topics__single">
                    <button
                        onClick={() => getNews("automobiles")}
                        className="topics__button"
                    >
                        Automobiles
                    </button>
                </li>
                <li className="topics__single">
                    <button
                        onClick={() => getNews("business")}
                        className="topics__button"
                    >
                        Business
                    </button>
                </li>
                <li className="topics__single">
                    <button
                        onClick={() => getNews("food")}
                        className="topics__button"
                    >
                        Food
                    </button>
                </li>
                <li className="topics__single">
                    <button
                        onClick={() => getNews("health")}
                        className="topics__button"
                    >
                        Health
                    </button>
                </li>
                <li className="topics__single">
                    <button
                        onClick={() => getNews("movies")}
                        className="topics__button"
                    >
                        Movies
                    </button>
                </li>
                <li className="topics__single">
                    <button
                        onClick={() => getNews("politics")}
                        className="topics__button"
                    >
                        Politics
                    </button>
                </li>
                <li className="topics__single">
                    <button
                        onClick={() => getNews("science")}
                        className="topics__button"
                    >
                        Science
                    </button>
                </li>
                <li className="topics__single">
                    <button
                        onClick={() => getNews("sports")}
                        className="topics__button"
                    >
                        Sports
                    </button>
                </li>
                <li className="topics__single">
                    <button
                        onClick={() => getNews("technology")}
                        className="topics__button"
                    >
                        Technology
                    </button>
                </li>
                <li className="topics__single">
                    <button
                        onClick={() => getNews("travel")}
                        className="topics__button"
                    >
                        Travel
                    </button>
                </li>
                <li className="topics__single">
                    <button
                        onClick={() => getNews("world")}
                        className="topics__button"
                    >
                        World
                    </button>
                </li>
            </ul>
        </section>
    );
};

export default Topics;
