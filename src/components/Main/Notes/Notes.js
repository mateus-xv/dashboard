//React Modules
import React from 'react';

//Components
import Note from './Note';
import Add from './Add';

const Notes = () => {
	return(
		<React.Fragment>
			<Note/>
			<Add/>
		</React.Fragment>
	);
}

export default Notes;