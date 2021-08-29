import React, { Component } from 'react'
// import PageTemplate from './PageTemplate'
import Table from './Table';
import Title from './Title';

export default class Careers extends Component {
    render() {
        return (
            <div>
                <h1>CAREERS</h1>
                <Table>
                    <Title name = "CREO KITCHEN"/>
                    첫번째Table.js</Table>
                <Table>두번째</Table>
                <Table>세번째</Table>
            </div>
        )
    }
}
