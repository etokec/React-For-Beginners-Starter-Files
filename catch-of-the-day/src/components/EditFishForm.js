import React from 'react';

class EditFishForm extends React.Component {

	render () {
		return(
			<form className="fish-edit" >
				<input name="name" ref={this.nameRef} type="text" value={this.props.fish.name}/>
				<input name="price" ref={this.priceRef}  type="text" value={this.props.fish.price}/>
				<select name="status" ref={this.statusRef} >
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea name="desc" ref={this.descRef}  value={this.props.fish.desc}/>
				<input name="image" ref={this.imageRef}  type="text" value={this.props.fish.image}/>
				
			</form>
			);
	}
}

export default EditFishForm;
