import React from 'react';
import Navigation from './Navbar';
import TableContainer from './containers/TableContainer';
import SearchQuery from './SearchQuery';

export default class App extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            searchQuery: {}
        }
    }
    
    setSearchParams (searchQuery) {
        this.setState({
            searchQuery
        });
    }

    render() {
        return (
            <div>
                <Navigation />
                <div className="container">
                    <SearchQuery onSearch={(searchQuery) => this.setSearchParams(searchQuery)}/>
                    <TableContainer query={this.state.searchQuery}/>
                </div>
            </div>
        );
    }
}