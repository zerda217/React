import React from 'react';
import { useSelector } from 'react-redux';
import Title from './Title';
import './Components.scss';

function Creo() {

    const aboutCreo = useSelector( (크레오설명) => 크레오설명);

    return (
        <div>
            <Title className="ABOUT CREO"></Title>
                <img className="aboutCreo" src="https://blog.creokorea.com//uploads/j_ae3930b51e.png" alt="ABOUT CREO"/>
                <p>{aboutCreo}</p>               
            <Title name = "크레오코리아 푸드테크 솔루션의 미래"/>
                <p>음식폐기물을 처리한 결과물을 비료/바이오 연료 등으로 재활용</p>
                <p>[자원&에너지 순환형 푸드테크 체인] 완성</p>
                <img className="foodTech" src=" " alt="FOOD TECH"/>
        </div>
    );
}

export default Creo;