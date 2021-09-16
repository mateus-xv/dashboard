//React Modules
import React from "react";

//Redux Modules
import { useSelector } from "react-redux";

//Components
import Article from "components/Main/shared/Article/Article";
import Topics from "components/Main/shared/Topics/Topics";
import Loading from "components/Main/shared/Loading/Loading";

//API Async Function
import getNews from "utils/getNews";

//Doing API request and adding to the store
getNews();

const selector = (state) => state.feed;

const Feed = () => {
    //Component State
    const state = useSelector(selector);

    //Checks if articles are available in store
    const articlesCheck = () => {
        if (state.isLoading) {
            return <Loading />;
        } else if (state.error) {
            return <p>An Error Ocurred</p>;
        } else if (!state.error && state.articles.results){
            return state.articles.results.map((article, index) => (
                <Article
                    key={index}
                    title={article.title}
                    body={article.abstract}
                    url={article.url}
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
