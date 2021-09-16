const initialState = {
    isLoading: true,
    error: false,
    articles: {
        results: [{ title: "Loading" }],
    },
};

export default function feedReducer(state = initialState, action) {
    switch (action.type) {
        case "feed/articlesSuccess": {
            return {
                ...state,
                isLoading: false,
                error: false,
                articles: action.payload,
            };
        }
        case "feed/articlesFailed": {
            return {
                ...state,
                isLoading: false,
                error: true,
            };
        }
        case "feed/articlesLoading": {
            return {
                ...state,
                isLoading: true,
                error: false,
            };
        }
        default:
            return state;
    }
}
