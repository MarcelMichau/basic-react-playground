import React from 'react';
import Input from 'react-bootstrap/lib/Input';
import ButtonInput from 'react-bootstrap/lib/ButtonInput';

export default class SearchQuery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: ''
        };
    }

    handleChange (e) {
        e.preventDefault();
        this.setState({
            firstName: this.refs.firstName.getValue(),
            lastName: this.refs.lastName.getValue()
        });
    }
    
    onSubmit (e) {
        e.preventDefault();
        this.props.onSearch(this.state);
    }

    render() {
        return (
            <form className="form-inline" onSubmit={(e) => this.onSubmit(e)}>
                <Input
                    type="text"
                    value={this.state.firstName}
                    placeholder="First Name"
                    label="Specify First Name"
                    hasFeedback
                    ref="firstName"
                    groupClassName="group-class"
                    labelClassName="label-class"
                    onChange={(e) => this.handleChange(e)} />
                    
                <Input
                    type="text"
                    value={this.state.lastName}
                    placeholder="Last Name"
                    label="Specify Last Name"
                    hasFeedback
                    ref="lastName"
                    groupClassName="group-class"
                    labelClassName="label-class"
                    onChange={(e) => this.handleChange(e)} />
                    
                    <ButtonInput bsStyle="primary" type="submit" value="Submit Button" />
            </form>
        );
    }
}