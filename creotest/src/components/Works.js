import React, { Component } from 'react'
// import PageTemplate from './PageTemplate'
import Table from './Table';
import Title from './Title';
import './Components.scss';

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
                <div className="Subtitle">
                    <h3>YESSUP(예썹)은 HACCP(식품안전관리인증기준)을 위한 스마트 솔루션입니다. 까다로운 HACCP의 행정
적 절차는 식품 공장의 생산성 향상에 커다란 걸림돌 입니다. YESSUP (예썹)은 IoT를 기반으로 한 실시간 공정 모니터링 및 문제 상황 대처와 동시에 수십 종의 CCP 일지와 법적 서류들의 작성과 보관의 용이성까지 확보 할 수 있습니다. YESSUP (예썹)은 식품 안전 신뢰도 확보와 생산 효율성 제고를 동시에 실현합니다.</h3>
                </div>
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
                <Table>
                    <Title name = "테스트"/>
                    <p>{this.state.fifth}</p>
                </Table>
                <Table>
                    <Title name = "테스트"/>
                    <p>{this.state.fifth}</p>
                </Table>
            </div>
        )
    }
}
