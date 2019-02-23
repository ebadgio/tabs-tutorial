import React, { Component } from 'react';
import '../styles/App.css';
import Tabs from './Tabs';

// Components
import HelloReact from './HelloReact';
import LoremIpsum from './LoremIpsum';
import Login from './Login';

class App extends Component {
	constructor() {
		super();
		this.state = {
			activeTab: 0
		}
		this.handleTabChange = this.handleTabChange.bind(this);
	}

	handleTabChange(tab) {
		this.setState({activeTab: tab})
	}

  	render() {
		return (
			<section className="section">
				<div className="container">
					<Tabs handleTabChange={this.handleTabChange} 
						  activeTab={this.state.activeTab}/>

					{this.state.activeTab === 0 ? <HelloReact /> : null}
					{this.state.activeTab === 1 ? <LoremIpsum /> : null}
					{this.state.activeTab === 2 ? <Login />: null}
				</div>
				
			</section>	
		);
  }
}

export default App;
