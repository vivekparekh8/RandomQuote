// var React = require('react');
// var ReactDOM = require('react-dom');
import React, {Component, PropTypes} from 'react';
// import ReactDOM from 'react-dom'; // Not using Main to render
// import React from 'react';
import AppBar from 'material-ui/AppBar';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Header extends Component {
    render() {
        return (
            <div className="main-container">
	            <MuiThemeProvider muiTheme={getMuiTheme()}>
		            <AppBar
					    title="Title"
					    iconClassNameRight="muidocs-icon-navigation-expand-more"
					/>
				</MuiThemeProvider>
				<div className="container">
		          {this.props.children}
		        </div>
			</div>
			  
        );
    }
}
// ReactDOM.render(<Header />, document.getElementById('app'));
