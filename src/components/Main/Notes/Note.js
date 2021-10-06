//React Modules
import React from "react";

//Action Creator
import {removeNote} from "redux/creators/actionCreators";

const Note = ({ title, header, content, noteId }) => {
    //Handles the click event on the note title, turning the modal visible
    const noteHandleClick = (noteModal) => {
        if (content.length > 200)
            noteModal.classList.add("note__modal--visible");
    };

    //Handles the click on remove button, removing the selected note
    const removeHandleClick = (e) => {
        e.stopPropagation();
        removeNote(noteId);
    };

    //Handles the click event on the outside of the modal, turning the modal hidden
    const modalHandleClick = (e, noteModal) => {
        e.stopPropagation();
        noteModal.classList.remove("note__modal--visible");
    };

    //Prevents the modal from closing when the body of the modal is clicked
    const bodyHandleClick = (e) => {
        e.stopPropagation();
    };

    return (
        <li
            onClick={(e) =>
                noteHandleClick(e.currentTarget.querySelector(".note__modal"))
            }
            className="note__single"
        >
            <h2 className="note__title">{title}</h2>
            <p className="note__header">{header}</p>
            <div
                onClick={(e) => modalHandleClick(e, e.target)}
                className="note__modal"
            >
                <div onClick={bodyHandleClick} className="note__body">
                    <div className="note__content-wrapper">
                        <h2 className="note__title">{title}</h2>
                        <p className="note__content">{content}</p>
                    </div>
                </div>
            </div>
            {content.length >= 200 ? (
                <div className="note__footer">
                    <button
                        className="note__remove-button"
                        onClick={(e) => removeHandleClick(e)}
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                    <button className="note__inspect-button">
                        <i className="fas fa-eye"></i>
                    </button>
                </div>
            ) : (
                <div className="note__footer--disabled">
                    <button
                        className="note__remove-button"
                        onClick={(e) => removeHandleClick(e)}
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            )}
        </li>
    );
};

export default Note;
