//React Modules
import React from "react";

//Redux Modules
import { useSelector } from "react-redux";

//Components
import Article from "components/Main/shared/Article/Article";
import Topics from "components/Main/shared/Topics/Topics";
import Loading from "components/Main/shared/Loading/Loading";
import Error from "components/Main/shared/Error/Error";

//API Async Function
import getNews from "utils/getNews";

//Doing API request and adding to the store
getNews();

const selector = (state) => state.feed;
const savedSelector = (state) => state.saved;

const Feed = () => {
    //Component State
    const state = useSelector(selector);

    //Saved State
    const savedState = useSelector(savedSelector);

    //Checks if the article is already on the saved articles array
    const isSavedCheck = (article) => {
        for (let savedArticle of savedState.savedArticles) {
            if (article.url === savedArticle.url) {
                return true;
            } else {
                continue;
            }
        }
        return false;
    };

    //Checks if articles are available in store
    const articlesCheck = () => {
        if (state.isLoading) {
            return <Loading />;
        } else if (state.error) {
            return <Error />;
        } else if (!state.error && state.articles.results) {
            return state.articles.results.map((article, index) => (
                <Article
                    key={index}
                    title={article.title}
                    body={article.abstract}
                    url={article.url}
                    isSaved={isSavedCheck(article)}
                />
            ));
        }
    };

    return (
        <React.Fragment>
            <div className="column-wrapper">
                <Topics />
            </div>
            <div className="cards-wrapper">{articlesCheck()}</div>
        </React.Fragment>
    );
};

export default Feed;
