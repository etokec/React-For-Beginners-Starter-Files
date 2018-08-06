import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import fishes from '../sample-fishes';

// The actual state and the method that 
//updates it needs to live in the same component
// Since state lives in the App
//so should addFish() and loadSampleFishes()
class App extends React.Component{
	state = {
		fishes : {},
		order : {}
	};

	addFish = (fish) => {
		// 1. Take a copy of existing state
		const fishes = {...this.state.fishes}; // ... object spread for copy
		// 2. Add our new fish to that fishes variable
		fishes[`fish${Date.now()}`] = fish ;
		// 3. Set the new fishes object to state
		this.setState({	fishes }); // Can also be fishes : fishes

	};

	loadSampleFishes = () => {
		this.setState({
			fishes: fishes
		});
	};

	addToOrder = key => {
		// 1. take a copy of state
		const order = {...this.state.order};
		// 2. either add to the order, or update  the number in our order
		order[key] = order[key] + 1 || 1 ;
		// 3. call setState to update our state object
		this.setState({ order });
	};

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
					<ul className="fishes">
						{Object.keys(this.state.fishes).map(key => ( 
							<Fish 
								key = {key} 
								index = {key}
								details = {this.state.fishes[key]} 
								addToOrder = {this.addToOrder} 
							/>
						))}
					</ul>

				</div>
					 <Order fishes={this.state.fishes} order={this.state.order} /> 
					 <Inventory addFish={this.addFish}
					 			 loadSampleFishes={this.loadSampleFishes} /> 
					 
			</div>
			)
	}

}

export default App;