import React from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {
	static propTypes = {
		fish: PropTypes.shape({
			image: PropTypes.string,
			name: PropTypes.string,
			desc: PropTypes.string,
			status: PropTypes.string,
			price: PropTypes.number
		}),
		index: PropTypes.string,
		udpateFish: PropTypes.func
	}
	handleChange = (event) =>{
		console.log(event);
		//update that fish
		//1. take a copy of the current fish
		const udpateFish = {
			...this.props.fish,
			[event.currentTarget.name]: event.currentTarget.value
		};

		this.props.updateFish(this.props.index,udpateFish);
	};

	render () {
		return(
			<form className="fish-edit" >
				<input 
					name="name" 
					ref={this.nameRef} 
					type="text" 
					onChange={this.handleChange} 
					value={this.props.fish.name}
				/>
				<input 
					name="price" 
					ref={this.priceRef} 
					type="text" 
					onChange={this.handleChange} 
					value={this.props.fish.price}
				/>
				<select 
					name="status" 
					ref={this.statusRef}
					 >
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea 
					name="desc" 
					ref={this.descRef} 
					onChange={this.handleChange} 
					value={this.props.fish.desc}
				/>
				<input 
					name="image" 
					ref={this.imageRef}  
					type="text" 
					onChange={this.handleChange} 
					value={this.props.fish.image}
				/>
				<button onClick = { () => this.props.deleteFish(this.props.index)}>
					Remove Fish
				</button>
			</form>
			);
	}
}

export default EditFishForm;
