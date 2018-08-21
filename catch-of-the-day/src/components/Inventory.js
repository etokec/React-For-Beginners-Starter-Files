import React from 'react';
import PropTypes from 'prop-types';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import Login from './Login';
import base, {firebaseApp} from '../base';
import firebase from 'firebase';

class Inventory extends React.Component{
	static propTypes = {
		fishes: PropTypes.object,
		updateFish: PropTypes.func,
		deleteFish: PropTypes.func,
		loadSampleFishes: PropTypes.func
	}

	state ={
		uid: null,
		owner: null
	}

	componentDidMount() {
		firebase.auth().onAuthStateChanged(user =>{
			if (user) {
				this.authHandler({ user });
			}
		})
	}

	authHandler = async (authData) => {
		//1. Lookup the current store in the firebase DB
		const store = await base.fetch(this.props.storeId, {context: this});
		//2. Claim it if there's no owner
		if(!store.owner){
			//save it as our own
			await base.post(`${this.props.storeId}/owner`, {
				data: authData.user.uid
			})
		}
		//3. Set the state of the inventory component to reflect the current user 
		this.setState({
			uid: authData.user.uid,
			owner: store.owner || authData.user.uid
		})
	}

	authenticate = (provider) => {
		const authProvider = new firebase.auth[`${provider}AuthProvider`]();
		firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
	}

	logout = async () => {
		console.log('Logging out')
		await firebase.auth().signOut();
		this.setState({uid: null});
	}
	render() {
		const logout  = <button onClick={this.logout}>Log Out!</button>

		//1. Check if they are not logged in 
		if (!this.state.uid){
			return <Login authenticate={this.authenticate}/>;	
		}
		
		//2. Check if user is owner of the store
		if (this.state.uid !== this.state.owner) {
			return <div>
				<p>Sorry you are not the owner!</p>
				{logout}
			</div>

		}

		//3. They are the owner, just render the inventory
		return (
			<div className="inventory">
				<h2>Inventory</h2>
				{logout}
				{Object.keys(this.props.fishes).map(key => (
					<EditFishForm 
							key = {key} 
							index = {key} 
							fish = {this.props.fishes[key]}
							updateFish = {this.props.updateFish}
							deleteFish = {this.props.deleteFish}
					/>
				))}
				<AddFishForm addFish={this.props.addFish} />
				<button onClick={this.props.loadSampleFishes}>
					Load Sample Fishes
				</button>
			</div>
			);
	}
}

export default Inventory;