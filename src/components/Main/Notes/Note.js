//React Modules
import React from "react";

const Note = ({ title, header, content }) => {
    //Handles the click event on the note title, turning the modal visible
    const noteHandleClick = (noteModal) => {
        if (!noteModal.classList.contains("note__modal--visible"))
            noteModal.classList.add("note__modal--visible");
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
            <div className="note__footer">
                <i className="fas fa-trash"></i>
                <i className="fas fa-eye"></i>
            </div>
        </li>
    );
};

export default Note;
