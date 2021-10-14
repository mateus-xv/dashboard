//React Modules
import React from "react";

//Redux Modules
import { useSelector } from "react-redux";

//Action Creator
import { clearActivities } from "redux/creators/actionCreators";

//Components
import Activity from "./Activity";

//Selector
const selector = (state) => state.activity;

const LastActivity = () => {
    const state = useSelector(selector); //Component State

    //Checks if activities array is null
    const checkActivities = () => {
        if (state.activities[0])
            return state.activities.map((activity) => (
                <Activity message={activity} />
            ));
        return <p>You don't have any activities.</p>;
    };

    return (
        <section className="last-activity">
            <h2 className="last-activity__title">Activity</h2>
            {state.activities[0] ? (
                <button
                    onClick={() => clearActivities()}
                    className="last-activity__clear-button"
                >
                    <i className="fas fa-trash"></i>
                </button>
            ) : null}
            <div className="last-activity__body-wrapper">
                {checkActivities()}
            </div>
        </section>
    );
};

export default LastActivity;
