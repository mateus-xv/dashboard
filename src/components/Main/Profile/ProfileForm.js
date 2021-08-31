//React Modules
import React, { useEffect } from "react";

//Redux Modules
import {useSelector} from 'react-redux';

//Action Creator
import { usernameChange } from "../../../redux/creators/actionCreators";

const profileSelector = (state) => state.profile;

const ProfileForm = () => {
	//Component State
	const state = useSelector(profileSelector);

	//Handles form submit, changing username in localStorage and store
	const handleSubmit = (e, input) => {
		e.preventDefault();
		localStorage.setItem("username", input.value);
		usernameChange(input.value);
	};

	useEffect(() => {
		const form = document.querySelector(".profile__form");
		const input = document.getElementById("username");

		form.addEventListener("submit", (e) => handleSubmit(e, input));
	},[])

	return (
		<form className="profile__form">
			<div className="user">
				<div className="user__avatar">
					<i className="fas fa-user"></i>
				</div>
			</div>
			<input
				type="text"
				name="username"
				id="username"
				placeholder={state.username}
			/>
			<button className="profile__submit">Submit</button>
		</form>
	);
};

export default ProfileForm;
