//React Modules
import React from "react";

//Redux Modules
import { useSelector } from "react-redux";

//Components
import Article from "components/Main/shared/Article/Article";

const selector = (state) => state.saved;
const Saved = () => {
    //Component State
    const state = useSelector(selector);
    const savedArticlesCheck = () => {
        if (state.savedArticles[0]) {
            return state.savedArticles.map((article) => (
                <Article
                    title={article.title}
                    body={article.body}
                    url={article.url}
                    isSaved={true}
                />
            ));
        } else {
            return <p>You don't have any saved articles.</p>;
        }
    };
    return (
        <div className="saved">
            <div className="cards-wrapper">
                {savedArticlesCheck()}
            </div>
        </div>
    );
};

export default Saved;
