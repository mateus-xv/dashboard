//React Modules
import React from 'react';

const ProfileForm = () => {
	return(
		<form className="profile__form">
            <div className="user">
               <div className="user__avatar"><i className="fas fa-user"></i></div>
            </div>
			<input type="text" name="username" id="username" placeholder="Username"/>
			<button className="profile__submit">Submit</button>
		</form>
	)
};

export default ProfileForm;