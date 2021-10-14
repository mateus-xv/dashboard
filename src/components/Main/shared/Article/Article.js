//React Modules
import React, { useState } from "react";

//Action Creator
import { addArticle, removeArticle } from "redux/creators/actionCreators";

const Article = ({ title, body, url, isSaved = false }) => {
    let [saved, setSaved] = useState(isSaved);

    //Adds the selected article to saved store and removes if already added
    const handleSaveClick = () => {
        if (!saved) {
            addArticle({
                title: title,
                body: body,
                url: url,
            });
            setSaved(true);
        } else {
            removeArticle({title, url});
            if (window.location.hash === "#/feed") setSaved(false);
        }
    };

    return (
        <section className="article">
            <h2 className="article__title">{title}</h2>
            <p className="article__body">{body}</p>
            <div className="article__actions">
                <button onClick={handleSaveClick} className="article__save">
                    <i
                        className={
                            saved ? "fas fa-bookmark" : "far fa-bookmark"
                        }
                    ></i>
                </button>
                <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="article__see-more"
                >
                    See More <i className="fas fa-arrow-circle-right"></i>
                </a>
            </div>
        </section>
    );
};

export default Article;
