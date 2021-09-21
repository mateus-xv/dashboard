//React Modules
import React from "react";

//Redux Modules
import { useSelector } from "react-redux";

//Components
import Note from "./Note";
import Add from "./Add";

const selector = (state) => state.notes;
const Notes = () => {
    //Component State
    const state = useSelector(selector);

    const notesCheck = () => {
        if (state.notes) {
            return state.notes.map((note) => (
                <Note title={note.title} content={note.content} />
            ));
        } else {
            return <p>You don't have any notes</p>;
        }
    };
    return (
        <React.Fragment>
            <ul className="note">
                {notesCheck()}
            </ul>
            <Add />
        </React.Fragment>
    );
};

export default Notes;
