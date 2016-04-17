import React from 'react';
import Table from 'react-bootstrap/lib/Table';

export default function JokeTable ({jokes}) {
    let rows = jokes.map((joke, i) => {
        let isNSFW = joke.categories.includes('explicit');
        return (
            <tr className={isNSFW ? 'danger' : ''} key={i}>
                <td>{joke.id}</td>
                <td>{joke.joke}</td>
             </tr>)
    });
    
    return rows.length > 0 ? (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Joke</th>
                </tr>
            </thead>
            <tbody>
                { rows }
            </tbody>
        </Table>
    )
    : <div>Loading...</div>
}
