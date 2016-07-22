import React from 'react';
import JokeTable from '../JokeTable';

export default class TableContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            jokes: []
        };
    }

    async doSearch(firstName = 'Chuck', lastName = 'Norris') {
        const response = await fetch(`http://api.icndb.com/jokes/random/10?firstName=${firstName}&lastName=${lastName}`);
        const data = await response.json();

        this.setState({
            jokes: data.value
        });
    }

    componentDidMount() {
        this.doSearch();
    }

    componentWillReceiveProps(props) {
        this.doSearch(props.query.firstName, props.query.lastName);
    }

    render() {
        return (
            <JokeTable jokes={this.state.jokes}/>
        );
    }
}