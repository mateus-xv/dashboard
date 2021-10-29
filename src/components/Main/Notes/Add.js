//React Modules
import React from "react";

//Redux Modules
import { useSelector } from "react-redux";

//Action Creator
import { addNote } from "redux/creators/actionCreators";

const selector = (state) => state.notes;
const Add = () => {
    //Component State
    const state = useSelector(selector);

    //Handles the click event on the add button, turning the modal visible
    const buttonHandleClick = () => {
        document.querySelector(".add__modal").classList.add("add__modal--visible");
    };

    //Handles the click event on the outside of the modal, turning the modal hidden
    const modalHandleClick = () => {
        document.querySelector(".add__modal").classList.remove("add__modal--visible");
    };

    //Prevents the modal from closing when the body of the modal is clicked
    const bodyHandleClick = (e) => {
        e.stopPropagation();
    };

    //Handles note addition modal, dispatching form values and closing the modal
    const handleSubmit = (e) => {
        e.preventDefault();
        let title = document.getElementById("title").value,
            content = document.getElementById("note").value;
        if(title.trim() != "" && content.trim() != ""){
            addNote({
                noteId: state.amount,
                title: title,
                header:
                    content.length <= 200 ? content : content.slice(0, 200) + "...",
                content: content,
            });
            document.getElementById("title").value = "";
            document.getElementById("note").value = "";
            document.querySelector(".add__modal").classList.remove("add__modal--visible");
        }

    };

    return (
        <React.Fragment>
            <button onClick={buttonHandleClick} className="add-button">
                <i className="fas fa-plus"></i>
            </button>
            <div className="add">
                <div onClick={modalHandleClick} className="add__modal">
                    <div onClick={bodyHandleClick} className="add__body">
                        <form onSubmit={(e) => handleSubmit(e)} className="add__form">
                            <input
                                name="title"
                                id="title"
                                type="text"
                                placeholder="Title"
                            />
                            <textarea
                                name="note"
                                id="note"
                                placeholder="Note"
                            ></textarea>
                            <button className="add__submit">
                                <i className="fas fa-angle-right"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Add;
