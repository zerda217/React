import React, { Component } from 'react'
// import PageTemplate from './PageTemplate'
import Table from './Table';
import Title from './Title';
import './Button.scss';

export default class Careers extends Component {
    state = {
        first: 'AI 제어시스템이 재료의 선정정, 계량, 투입부터 조리, 플레이팅, 세척까지',
        second: '사전에 세팅된 레시피대로',
        third: '식품 안전 및 위생 관리 프로세스를',
        forth: '주방 내 작업단위를 기반으로 모듈화된 시스템으로'
    }

    render() {
        return (
            <div>
                <div className="imgbox">
                    <img className="creoKitchen" src=" " alt="creoKitchen"/><br/>
                    <button className="Outline">CREO KITCHEN</button>
                </div>
                <h4>크레오 키친은 스스로 조리하는 주방입니다.</h4>
                <Table>
                    <Title name = "AI 제어 시스템"/>
                    <p>{this.state.first}</p>
                </Table>
                <Table>
                    <Title name = "사전에 세팅된 레시피"/>
                    <p>{this.state.second}</p>
                </Table>
                <Table>
                    <Title name = "식품 안전 및 위생 관리 프로세스"/>
                    <p>{this.state.third}</p>
                </Table>
                <Table>
                    <Title name = "작업단위를 기반으로 모듈화된 시스템"/>
                    <p>{this.state.forth}</p>
                </Table>
            </div>
        )
    }
}
