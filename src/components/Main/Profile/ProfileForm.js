//React Modules
import React from 'react';

//Redux Store
import store from '../../../redux/store/store';

const ProfileForm = () => {
	//Component State
	const state = store.getState().profile;

	return(
		<form className="profile__form">
            <div className="user">
               <div className="user__avatar"><i className="fas fa-user"></i></div>
            </div>
			<input type="text" name="username" id="username" placeholder={state.username}/>
			<button className="profile__submit">Submit</button>
		</form>
	)
};

export default ProfileForm;
