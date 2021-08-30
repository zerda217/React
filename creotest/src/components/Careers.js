import React, { Component } from 'react'
// import PageTemplate from './PageTemplate'
import Table from './Table';
import Title from './Title';
import './Button.scss';

export default class Careers extends Component {
    render() {
        return (
            <div>
                <div className="imgbox">
                    <img className="creoKitchen" src=" " alt="creoKitchen"/><br/>
                    <button className="Outline">CREO KITCHEN</button>
                </div>
                <h4>크레오 키친은 스스로 조리하는 주방입니다.</h4>
                <Table>
                    <Title name = "CREO KITCHEN"/>
                    첫번째Table.js</Table>
                <Table>두번째</Table>
                <Table>세번째</Table>
            </div>
        )
    }
}
