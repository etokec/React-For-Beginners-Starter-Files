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

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
					<ul className="fishes">
						{Object.keys(this.state.fishes).map(key => <Fish key={key} details=
							{this.state.fishes[key]}/>)}
					</ul>

				</div>
					 <Order /> 
					 <Inventory addFish={this.addFish}
					 			 loadSampleFishes={this.loadSampleFishes} /> 
					 
			</div>
			)
	}

}

export default App;