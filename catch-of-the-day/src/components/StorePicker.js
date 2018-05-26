import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component{
	render(){
		return (
			<React.Fragment>
				{/*This a comment, It must be INSIDE
				 the return element*/}
				<form className="store-selector"> 
					<h2>Please Enter a Store</h2>
					<input type="text" required placeholder="Store Name" defaultValue={getFunName()}/>
					<button type="submit">Visit Store ➡</button>
				</form>
			</React.Fragment>
			);
	}
}

export default StorePicker;
