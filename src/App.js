// Zwraca komponent <Router>, który to synchronizuje widoczny komponent 
// z adresem URL widocznym w przeglądarce

import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, hashHistory } from 'react-router';

import styles from './App.css';

class App extends Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={Navigation}>
					<IndexRoute component={Home} />
					<Route path='/contact' component={Contact} />
					<Route path='/hello/:name' component={Hello} />
					<Route path='*' component={PageNotFound} />
				</Route>
			</Router>
		);
	}
}

const Home = () => <h1>Hello here HOME component</h1>;
const Contact = () => <h1> Hello here CONTACT component</h1>;
const PageNotFound = () => <h1>404 page not found</h1>;
const Hello = (props) => <h1>Hello, {props.params.name}!</h1>

//dlaczego styles nie działają?

const Navigation = props => (
	<div>
		<ul>
			<li><IndexLink to="/" activeStyle={{color: '#48abee'}}>Home</IndexLink></li>
			<li><Link to="/contact" activeClassName={styles.active} onlyActiveOnIndex>Contact</Link></li>
		</ul>
		{props.children}
	</div>
);

export default App;
