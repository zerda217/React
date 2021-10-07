
import { useState } from 'react';
import Table from './Table';
import Title from './Title';
import './Components.scss';

function Careers () {
    const [header, setHeader] = useState('CREO KITCHEN');

    // const croeKitchen = () => [
    //     {
    //     header: '크레오 키친',
    //     title: 
    //     }
    // ];

    return (
        <div>
            <div className="CareersHeader">
                <button className="Outline">{header}</button>
            </div>
            <h3>크레오 키친은 스스로 조리하는 주방입니다. <br/> 사람이 조작하지 않아도 스스로 신호를 지키고 <br/> 길을 찾아 최적의 주행을 하는 자율 주행 차량처럼 <br/> 사람의 개입 없이 스스로 주문을 인식하고 조리하여 <br/> 최적의 요리를 제공하고, 최소한의 자원 소모로 <br/> 균일한 맛과 오류 없는 위생 관리를 구현합니다.</h3>
            <Table>
                <Title name = "AI 제어 시스템"/>
                <p><p>AI 제어시스템이 재료의 선정정, 계량, 투입부터 조리, 플레이팅, 세척까지 <br/> 주방에서 일어나는 조리과정을 스스로 판단하여 제어하고 동작합니다.</p></p>
            </Table>
            <Table>
                <Title name = "사전에 세팅된 레시피"/>
                <p><p>사전에 세팅된 레시피대로 정밀하게 재료의 조리 시간과 온도, 방법 등을 <br/> 수행해 항상 일정한 품질의 규격화된 요리 결과물을 완성합니다.</p></p>
            </Table>
            <Table>
                <Title name = "식품 안전 및 위생 관리 프로세스"/>
                <p>식품 안전 및 위생 관리 프로세스를 전체 조리 공정 및 설비에 적용해,<br/> 식품 안전 위해요소를 차단하고 데이터화하여여 상시 관리합니다.</p>
            </Table>
            <Table>
                <Title name = "작업단위를 기반으로 모듈화된 시스템"/>
                <p>주방 내 작업단위를 기반으로 모듈화된 시스템으로 어떠한 형태의 주방에도 적용 가능하며, <br/>비용 및 공간적 제약을 최소화 합니다.</p>
            </Table>
        </div>
    )
}

export default Careers;