import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
	//Default Props can be overwritten
	static defaultProps = {
		title: 'Github Finder',
		icon: 'fab fa-github'
	};
	//Checking the types of props passed basically typeChecking
	static propTypes = {
		title: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired
	};

	render() {
		return (
			<nav className="navbar bg-primary">
				<h1>
					<i className={this.props.icon} />
					{this.props.title}
				</h1>
			</nav>
		);
	}
}

export default Navbar;
