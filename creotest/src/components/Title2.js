import React, { useState } from 'react';
import Table from './Table';
import Title from './Title';
import './Components.scss';

// const pageData = {
//   Works: {
//   header: 'Works',
//   subTitle: <h3>YESSUP(예썹)은 HACCP(식품안전관리인증기준)을 위한 스마트 솔루션입니다. <br/> 
//   까다로운 HACCP의 행정적 절차는 식품 공장의 생산성 향상에 커다란 걸림돌입니다.<br/> 
//   YESSUP (예썹)은 IoT를 기반으로 한 실시간 공정 모니터링 및 문제 상황 대처와 동시에 <br/>
//   수십 종의 CCP 일지와 법적 서류들의 작성과 보관의 용이성까지 확보 할 수 있습니다. <br/>
//   YESSUP (예썹)은 식품 안전 신뢰도 확보와 생산 효율성 제고를 동시에 실현합니다.</h3>,
//   tableTitle1: "CCP 자동 모니터링",
//   tableScript1: 'IoT 솔루션을 활용, 각종 센서들을 통해 CCP 자동 모니터링을 구축합니다.'
// },

//   Team: {
//   header: 'SaharaHeader',
//   subTitle: <h3>SAHARA(사하라)는 IoT기반 스마트 음식 폐기물 처리기입니다.<br/> 
//   3년간의 연구 개발 끝에 자체 개발한 SAHARA(사하라) 프로페셔널은 <br/> 
//   매년 500만톤 이상 발생하며 해마다 3%씩 증가하는 음식 폐기물 문제에 최적화된 솔루션입니다. <br/> 
//   기존의 방식으로는 한계가 있던 음식 폐기물 문제에 SAHARA(사하라)만의 <br/> 
//   강력한 건조 분쇄와 IoT 기술로 다각도로 음식 폐기물 문제에 접근합니다. <br/> 
//   SAHARA(사하라)는 인류의 지속 가능한 식생활을 추구합니다.</h3>,
//   tableTitle1: "AI 제어 시스템",
//   tableScript1: <p>강력한 건조 분쇄를 통해 <br/> 최대 80%까지 부피 절감이 가능합니다.</p>
//   }
// };

// const Title2 = ({ match }) => {
  
// 프로필에서 사용 할 데이터
const profileData = {
  velopert: {
    name: '김민준',
    description:
      'Frontend Engineer @ Laftel Inc. 재밌는 것만 골라서 하는 개발자'
  },
  gildong: {
    name: '홍길동',
    description: '전래동화의 주인공'
  }
};

const Profile = ({ match }) => {
  // 파라미터를 받아올 땐 match 안에 들어있는 params 값을 참조합니다.
  const { username } = match.params;
  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
