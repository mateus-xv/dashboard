//React Modules
import React, {useEffect} from "react";

const Note = () => {
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
						<p className="note__content">
							Lorem ipsum ullamco consectetur eu deserunt anim adipisicing ex officia 
							minim mollit eiusmod exercitation ut sunt do ad eu eu excepteur esse 
							duis aute fugiat amet ut ad.
							<br/>
							Excepteur aute exercitation est minim. Elit minim adipisicing occaecat quis.
							Commodo quis. Eiusmod excepteur ad aute eu. Esse in enim mollit fugiat in ut 
							cupidatat aute sed adipisicing in proident dolore in pariatur eu minim.
						</p>
					</div>
				</div>
			</li>
		</ul>
	);
}

export default Note;