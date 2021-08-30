import React, { Component } from 'react';
// import PageTemplate from './PageTemplate'
import Table from './Table';
import Title from './Title';
import './Button.scss';

export default class Creo extends Component {
    render() {
        return (
            <div>
                <Title theme="outline"> CREO </Title>
                <Table>
                    <Title name = "크레오코리아 푸드테크 솔루션의 미래"/>
                    <p>음식폐기물을 처리한 결과물을 비료/바이오 연료 등으로 재활용</p>
                    <p>[자원&에너지 순환형 푸드테크 체인] 완성</p></Table>
            </div>
        )
    }
}
