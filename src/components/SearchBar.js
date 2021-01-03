import React from 'react';
import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component {
    state = {
        searchTerm: '',
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    };

    handleSubmit = (event) => {
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTerm);

        event.preventDefault();
        
    }

    render() {
        return (
            <Paper elevation={6} style={{ padding: '25px', background: '#cceeff',maxWidth: '50%' }}>
                <form onSubmit={this.handleSubmit} style={{ maxWidth: '100%'}}>
                    <TextField 
                    style={{  color:'black', fontWeight: '500' }}
                    fullWidth 
                    label="Search ..."
                    onChange={this.handleChange}/>
                </form>
            </Paper>
        )
    }
}

export default SearchBar;