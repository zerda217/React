import React, { Component } from 'react';
// import PageTemplate from './PageTemplate'
// import Table from './Table';
import Title from './Title';
import './Components.scss';

export default class Creo extends Component {
    render() {
        return (
            <div>
                <Title className="ABOUT CREO"></Title>
                    <img className="aboutCreo" src="https://blog.creokorea.com//uploads/j_ae3930b51e.png" alt="ABOUT CREO"/>
                    <p>크레오코리아는 클라이언트의 니즈와 고객의 감성을 충족시키는 UI(사용자 인터페이스)와</p>
                    <p>긍정적인 UX(사용자경험)설계 경험을 바탕으로 IoT 기술까지 융합된 전문성을 갖추었습니다.</p>
                
                    <Title name = "크레오코리아 푸드테크 솔루션의 미래"/>
                    <p>음식폐기물을 처리한 결과물을 비료/바이오 연료 등으로 재활용</p>
                    <p>[자원&에너지 순환형 푸드테크 체인] 완성</p>
                    <img className="foodTech" src=" " alt="FOOD TECH"/>
            </div>
        );
    }
}
