import React, { Component } from 'react'
// import PageTemplate from './PageTemplate'
import Table from './Table'

export default class Creo extends Component {
    render() {
        return (
            <div>
                <h1>CREO</h1>
                <Table>첫번째</Table>
                <Table>두번째</Table>
                <Table>세번째</Table>
            </div>
        )
    }
}
