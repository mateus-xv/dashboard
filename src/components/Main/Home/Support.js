import React from 'react';

const Support = () => {
	//Activates the success div
	const handleSubmit = (e) => {
		e.preventDefault();
		const success = document.querySelector(".form-success");
		success.classList.add("form-success--visible");
	};

	return(
		<section className="support">
			<h2 className="support__title">Lorem Ipsum</h2>
			<form className="support__form"  onSubmit={handleSubmit}>
				<textarea className="support__message" name="message" id="message"></textarea>
				<button className="support__submit"><i className="fas fa-angle-right"></i></button>
				<div className="form-success">
					<p className="form-success__message">Sent!</p>
					<button className="form-success__button"><i className="fas fa-check"></i></button>
				</div>
			</form>
		</section>
	)
};

export default Support;