//React Modules
import React, { useEffect } from "react";

//Action Creator
import { addNote } from "redux/creators/actionCreators";

const Add = () => {
    //Handles the click event on the add button, turning the modal visible
    const buttonHandleClick = (addModal) => {
        addModal.classList.add("add__modal--visible");
    };

    //Handles the click event on the outside of the modal, turning the modal hidden
    const modalHandleClick = (addModal) => {
        addModal.classList.remove("add__modal--visible");
    };

    //Prevents the modal from closing when the body of the modal is clicked
    const bodyHandleClick = (e) => {
        e.stopPropagation();
    };

    //Handles note addition modal, dispatching form values and closing the modal
    const handleSubmit = (e, addModal) => {
        e.preventDefault();
        let title = document.getElementById("title").value,
            content = document.getElementById("note").value;
        addNote({
            title: title,
            header:
                content.length <= 200 ? content : content.slice(0, 200) + "...",
            content: content,
        });

        document.getElementById("title").value = "";
        document.getElementById("note").value = "";
        addModal.classList.remove("add__modal--visible");
    };

    useEffect(() => {
        const addModal = document.querySelector(".add__modal"),
            addBody = document.querySelector(".add__body"),
            addButton = document.querySelector(".add-button"),
            form = document.querySelector(".add__form");

        addButton.addEventListener("click", () => buttonHandleClick(addModal));
        addModal.addEventListener("click", () => modalHandleClick(addModal));
        addBody.addEventListener("click", bodyHandleClick);
        form.addEventListener("submit", (e) => handleSubmit(e, addModal));
    }, []);

    return (
        <React.Fragment>
            <button className="add-button">
                <i className="fas fa-plus"></i>
            </button>
            <div className="add">
                <div className="add__modal">
                    <div className="add__body">
                        <form className="add__form">
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
