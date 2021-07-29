//React Modules
import React from "react";

const Topics = () => {

	//Returns the className based on the pathname
	const urlCheck = () => {
		const path = window.location.pathname;
		if(path === "/feed")
			return "topics--feed";

		return "topics";
	};

	return(
		<section className={urlCheck()}>
				<h2 className="topics__title">Lorem Ipsum</h2>
				<ul className="topics__container">
					<li className="topics__single">Lorem Ipsum</li>	
					<li className="topics__single">Lorem Ipsum</li>	
					<li className="topics__single">Lorem Ipsum</li>		
					<li className="topics__single">Lorem Ipsum</li>	
					<li className="topics__single">Lorem Ipsum</li>	
					<li className="topics__single">Lorem Ipsum</li>	
					<li className="topics__single">Lorem Ipsum</li>		
					<li className="topics__single">Lorem Ipsum</li>	
					<li className="topics__single">Lorem Ipsum</li>	
					<li className="topics__single">Lorem Ipsum</li>	
					<li className="topics__single">Lorem Ipsum</li>	
					<li className="topics__single">Lorem Ipsum</li>	
				</ul>
		</section>
	)
};

export default Topics;