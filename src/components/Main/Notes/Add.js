//React Modules
import React, {useEffect} from 'react';

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
	}

	useEffect(() => {
		const addModal = document.querySelector(".add__modal"),
			addBody = document.querySelector(".add__body"),
			addButton = document.querySelector(".add-button");

		addButton.addEventListener("click", () => buttonHandleClick(addModal));
		addModal.addEventListener("click", () => modalHandleClick(addModal));
		addBody.addEventListener("click", bodyHandleClick);
	}, [])

	return(
		<React.Fragment>
			<button className="add-button"><i className="fas fa-plus"></i></button>
			<div className="add">
				<div className="add__modal">
					<div className="add__body">
						<form className="add__form">
							<input name="title" id="title" type="text" placeholder="Title"/>
							<textarea name="note" id="note" placeholder="Note"></textarea>
							<button className="add__submit"><i className="fas fa-angle-right"></i></button>
						</form>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Add;