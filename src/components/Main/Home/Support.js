//React Modules
import React, { useEffect } from 'react';

const Support = () => {
	//Activates the success div received as parameter when form is submitted 
	const handleSubmit = (e, success) => {
		success.classList.add("form-success--visible");
		e.preventDefault();
	};

	//Removes the success feedback when the success div is clicked
	const handleSuccess = (success) => {
		success.classList.remove("form-success--visible");
	};

	useEffect(() => {
		const form = document.querySelector(".support__form"),
			success = document.querySelector(".form-success"),
			successDiv = document.querySelector(".form-success, .form-success__message");
		form.addEventListener("submit", (e) => handleSubmit(e, success));
		successDiv.addEventListener("click", () => handleSuccess(success));
	}, []);

	return(
		<section className="support">
			<h2 className="support__title">Support</h2>
			<form className="support__form">
				<textarea className="support__message" name="message" id="message"></textarea>
				<button className="support__submit"><i className="fas fa-angle-right"></i></button>
				<div className="form-success">
					<p className="form-success__message">Sent!<br/><i className="fas fa-check"></i></p>
				</div>
			</form>
		</section>
	)
};

export default Support;
