import React, { Component } from 'react'
// import PageTemplate from './PageTemplate'
import Table from './Table';
import Title from './Title';
import './Button.scss';

export default class Works extends Component {
    state = {
        first: 'IoT 솔루션을 활용, 각종 센서들을 통해 CCP 자동 모니터링을 구축합니다.',
        second: '공정 기록의 전산화를 통해 제품 연구 개발 및 공정 개선에 활용 가능합니다.',
        third: 'CCP 공정 중 한계 기준 이탈 시 이를 즉시 담당자에서 알리고',
        forth: '주방 내 작업단위를 기반으로 모듈화된 시스템으로',
        fifth: 'HACCP 운영과 관련된 모든 문서를 디지털화 함으로써 보관 및 작성의 용이성을 확보합니다.'
    }

    render() {
        return (
            <div>
                <div className="imgbox">
                    <img className="Works" src=" " alt="Works"/><br/>
                    <button className="Outline">HACCPERP YESSUP</button>
                </div>
                <h4>YESSUP(예썹)은 HACCP(식품안전관리인증기준)을 위한 스마트 솔루션입니다.</h4>
                <Table>
                    <Title name = "CCP 자동 모니터링"/>
                    <p>{this.state.first}</p>
                </Table>
                <Table>
                    <Title name = "기준 이탈 시 빠른 조치"/>
                    <p>{this.state.second}</p>
                </Table>
                <Table>
                    <Title name = "일시적 이탈 예외처리 기능 구축"/>
                    <p>{this.state.third}</p>
                </Table>
                <Table>
                    <Title name = "일시적 이탈 예외처리 기능 구축"/>
                    <p>{this.state.forth}</p>
                </Table>
                <Table>
                    <Title name = "모든 문서를 디지털화"/>
                    <p>{this.state.fifth}</p>
                </Table>
            </div>
        )
    }
}
