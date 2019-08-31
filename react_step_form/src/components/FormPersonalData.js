import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalData extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    previous = e => {
        e.preventDefault();
        this.props.prevStep()
    }
    
    render() {
        const { values: { occupation, city, bio }, handleChange } = this.props;
        return (
                <MuiThemeProvider>
                    <React.Fragment>
                    <AppBar title='Enter Personal Details' />
                <TextField 
                    hintText='Occupation'
                    floatingLabelText='Enter Occupation'
                    onChange={handleChange('occupation')}
                    defaultValue={occupation}
                />
                <br/>
                <TextField 
                    hintText='City'
                    floatingLabelText='Enter City of Residence'
                    onChange={handleChange('city')}
                    defaultValue={city}
                />
                <br/>
                <TextField 
                    hintText='Bio'
                    floatingLabelText='Enter Bio'
                    onChange={handleChange('bio')}
                    defaultValue={bio}
                />
                <br/>
                <RaisedButton 
                    label='Previous'
                    primary={true}
                    style={styles.button}
                    onClick={this.previous}
                />
                <RaisedButton 
                    label='Continue'
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                />
                    </React.Fragment>
                </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormPersonalData
