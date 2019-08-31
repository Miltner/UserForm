import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Success extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                <AppBar title='Success'/>
            </MuiThemeProvider>
            <div>
                <h1>`Thank you for submitting the required information`</h1>
                <p>You will recieve a confirmation email</p>
            </div>
            </div>
        )
    }
}

export default Success
