const initialState = {
    savedArticles: [],
};

export default function savedReducer(state = initialState, action) {
    switch (action.type) {
        case "saved/addArticle": {
            return {
                ...state,
                savedArticles: [...state.savedArticles, action.payload],
            };
        }
        case "saved/removeArticle": {
            return {
                ...state,
                savedArticles: state.savedArticles.filter(
                    (savedArticle) => savedArticle.url !== action.payload
                ),
            };
        }
        default:
            return state;
    }
}
