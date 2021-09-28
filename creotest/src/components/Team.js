import React, { Component } from 'react'
// import PageTemplate from './PageTemplate'
import Table from './Table';
import Title from './Title';
import './Components.scss';

export default class Team extends Component {

    render() {
        return (
            <div>
                <div className="SaharaHeader">
                    <button className="Outline">SAHARA</button>
                </div>
                <h3>SAHARA(사하라)는 IoT기반 스마트 음식 폐기물 처리기입니다.<br/> 3년간의 연구 개발 끝에 자체 개발한 SAHARA(사하라) 프로페셔널은 <br/> 매년 500만톤 이상 발생하며 해마다 3%씩 증가하는 음식 폐기물 문제에 최적화된 솔루션입니다. <br/> 기존의 방식으로는 한계가 있던 음식 폐기물 문제에 SAHARA(사하라)만의 <br/> 강력한 건조 분쇄와 IoT 기술로 다각도로 음식 폐기물 문제에 접근합니다. <br/> SAHARA(사하라)는 인류의 지속 가능한 식생활을 추구합니다.</h3>
                <Table>
                    <Title name = "AI 제어 시스템"/>
                    <p>강력한 건조 분쇄를 통해 <br/> 최대 80%까지 부피 절감이 가능합니다.</p>
                </Table>
                <Table>
                    <Title name = "사전에 세팅된 레시피"/>
                    <p>사하라만의 독자적인 결로응집시스템으로 <br/> 외기 순환이 없어 악취 없이 음식 폐기물 처리가 가능합니다.</p>
                </Table>
                <Table>
                    <Title name = "식품 안전 및 위생 관리 프로세스"/>
                    <p>첨단 IoT 기술로 OTA(Over The Air) 업데이트 및 각종 데이터 확인, <br/> 제품 이상 동작 확인 등 다양한 추가 기능을 제공합니다.</p>
                </Table>
                <Table>
                    <Title name = "작업단위를 기반으로 모듈화된 시스템"/>
                    <p>적된 제품 동작 데이터는 음식 폐기물 처리량, 빈도, 추세 등의 시각화를 통해 <br/> 향후 지속적 폐기물 관리 솔루션 개발에 활용됩니다.</p>
                </Table>
            </div>
        )
    }
}
