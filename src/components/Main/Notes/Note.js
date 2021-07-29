//React Modules
import React from "react";

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
			</li>
		</ul>
	);
}

export default Note;