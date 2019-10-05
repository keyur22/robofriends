import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchField: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(users => this.setState({ robots: users }));
	}

	getSearchField = e => {
		this.setState({ searchField: e.target.value });
	}

	render() {
		const { robots, searchField } = this.state;
		const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));

		if (!robots.length) {
			return (<h1 className='light-blue tc'>Loading...</h1>);
		} else {
			return (
				<div className='tc pa2'>
					<h1 className='light-blue'>RoboFriends</h1>
					<SearchBox search={this.getSearchField} />
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
				</div>
			);
		}
	}
};

export default App;
