const initialState = {
    articles: {
        results: [{title: "Loading"}]
    },
};

export default function feedReducer(state = initialState, action) {
    switch (action.type) {
        case "feed/articlesSuccess": {
            return {
                ...state,
                articles: action.payload,
            };
        }
        default:
            return state;
    }
}
