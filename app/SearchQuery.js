import React from 'react';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';

export default class SearchQuery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: ''
        };
    }

    handleFirstNameChange (e) {
        this.setState({
            firstName: e.target.value
        });
    }

    handleLastNameChange (e) {
        this.setState({
            lastName: e.target.value
        });
    } 
    
    onSubmit (e) {
        e.preventDefault();
        this.props.onSearch(this.state);
    }

    render() {
        return (
            <Form inline onSubmit={(e) => this.onSubmit(e)}>
                <FormGroup
                    controlId="searchForm">
                    <ControlLabel>First Name</ControlLabel>
                    <FormControl 
                        type="text"
                        value={this.state.firstName}
                        placeholder="First Name"
                        onChange={this.handleFirstNameChange.bind(this)}
                    />
                    <ControlLabel>Last Name</ControlLabel>
                    <FormControl 
                        type="text"
                        value={this.state.lastName}
                        placeholder="Last Name"
                        onChange={this.handleLastNameChange.bind(this)}
                    />
                    <Button bsStyle="primary" type="submit">Search</Button>
                </FormGroup>
            </Form>
        );
    }
}