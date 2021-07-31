//React Modules
import React, {useEffect} from "react";

const Note = () => {
	const noteHandleClick = (noteModal) => {
		noteModal.classList.add("note__modal--visible");
	};

	const modalHandleClick = (noteModal) => {
		noteModal.classList.remove("note__modal--visible");
	};

	const bodyHandleClick = (e) => {
		e.stopPropagation();
	}

	useEffect(() => {
		const noteModal = document.querySelector(".note__modal"),
			noteTitle = document.querySelector(".note__title"),
			noteBody = document.querySelector(".note__body");

		noteTitle.addEventListener("click", () => noteHandleClick(noteModal));
		noteModal.addEventListener("click", () => modalHandleClick(noteModal));
		noteBody.addEventListener("click", bodyHandleClick);
	}, [])

	return(
		<ul className="note">
			<li className="note__single">
				<h2 className="note__title">Lorem Ipsum <i className="fas fa-arrow-circle-right"></i></h2>
				<p className="note__content">
					Lorem ipsum ullamco consectetur eu deserunt anim adipisicing ex officia 
					minim mollit eiusmod exercitation ut sunt do ad eu eu excepteur esse 
					duis aute fugiat amet ut ad.
				</p>
				<div className="note__modal">
					<div className="note__body">
						<h2 className="note__title">Lorem Ipsum</h2>
						<div className="note__content-wrapper">
							<p className="note__content">
								Lorem ipsum ullamco consectetur eu deserunt anim adipisicing ex officia 
								minim mollit eiusmod exercitation ut sunt do ad eu eu excepteur esse 
								duis aute fugiat amet ut ad.
								<br/>
								Excepteur aute exercitation est minim. Elit minim adipisicing occaecat quis.
								Commodo quis. Eiusmod excepteur ad aute eu. Esse in enim mollit fugiat in ut 
								cupidatat aute sed adipisicing in proident dolore in pariatur eu minim.
								<br/>
								Excepteur aute exercitation est minim. Elit minim adipisicing occaecat quis.
								Commodo quis. Eiusmod excepteur ad aute eu. Esse in enim mollit fugiat in ut 
								cupidatat aute sed adipisicing in proident dolore in pariatur eu minim.
								<br/>
								Excepteur aute exercitation est minim. Elit minim adipisicing occaecat quis.
								Commodo quis. Eiusmod excepteur ad aute eu. Esse in enim mollit fugiat in ut 
								cupidatat aute sed adipisicing in proident dolore in pariatur eu minim.
								<br/>
								Excepteur aute exercitation est minim. Elit minim adipisicing occaecat quis.
								Commodo quis. Eiusmod excepteur ad aute eu. Esse in enim mollit fugiat in ut 
								cupidatat aute sed adipisicing in proident dolore in pariatur eu minim.
							</p>
						</div>
					</div>
				</div>
			</li>
		</ul>
	);
}

export default Note;