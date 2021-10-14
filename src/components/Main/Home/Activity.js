//React Modules
import React from 'react';

const Activity = ({message}) => {
    return(
        <div className="last-activity__content-wrapper">
            <div className="last-activity__mark"></div>
            <p className="last-activity__message">
                {message}
            </p>
        </div>
    )
}

export default Activity;
