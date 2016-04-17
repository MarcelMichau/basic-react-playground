import React from 'react';
import JokeTable from '../JokeTable';

export default class TableContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            jokes: []
        };
    }

    doSearch(firstName = 'Chuck', lastName = 'Norris') {
        fetch(`http://api.icndb.com/jokes/random/10?firstName=${firstName}&lastName=${lastName}`)
            .then(response => response.json())
            .then(res => {
                this.setState({
                    jokes: res.value
                });
            });
    }

    componentDidMount() {
        this.doSearch();
    }
    
    componentWillReceiveProps(props){
        this.doSearch(props.query.firstName, props.query.lastName);
    }

    render() {
        return (
            <JokeTable jokes={this.state.jokes}/>
        );
    }
}