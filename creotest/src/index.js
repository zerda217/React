import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import Root from './Root';

import reportWebVitals from './reportWebVitals';

/* 리덕스에서 관리할 내용 */
// const text = {
//   크레오코리아는: <p>크레오코리아는 클라이언트의 니즈와 고객의 감성을 충족시키는 UI(사용자 인터페이스)와 <br/> 
// 긍정적인 UX(사용자경험)설계 경험을 바탕으로 IoT 기술까지 융합된 전문성을 갖추었습니다.</p>,
//   YESSUP: <p>YESSUP(예썹)은 HACCP(식품안전관리인증기준)을 위한 스마트 솔루션입니다. <br/> 
//   까다로운 HACCP의 행정적 절차는 식품 공장의 생산성 향상에 커다란 걸림돌 입니다.<br/> 
//   YESSUP (예썹)은 IoT를 기반으로 한 실시간 공정 모니터링 및 문제 상황 대처와 동시에 <br/>
//   수십 종의 CCP 일지와 법적 서류들의 작성과 보관의 용이성까지 확보 할 수 있습니다. <br/>
//   YESSUP (예썹)은 식품 안전 신뢰도 확보와 생산 효율성 제고를 동시에 실현합니다.</p>
// };

const 크레오코리아는 = <p>리덕스 크레오코리아는 클라이언트의 니즈와 고객의 감성을 충족시키는 UI(사용자 인터페이스)와 <br/> 
긍정적인 UX(사용자경험)설계 경험을 바탕으로 IoT 기술까지 융합된 전문성을 갖추었습니다.
</p> ;

// const YESSUP = <p>YESSUP(예썹)은 HACCP(식품안전관리인증기준)을 위한 스마트 솔루션입니다. <br/> 
// 까다로운 HACCP의 행정적 절차는 식품 공장의 생산성 향상에 커다란 걸림돌 입니다.<br/> 
// YESSUP (예썹)은 IoT를 기반으로 한 실시간 공정 모니터링 및 문제 상황 대처와 동시에 <br/>
// 수십 종의 CCP 일지와 법적 서류들의 작성과 보관의 용이성까지 확보 할 수 있습니다. <br/>
// YESSUP (예썹)은 식품 안전 신뢰도 확보와 생산 효율성 제고를 동시에 실현합니다.</p>

/* 액션 타입 정의 - 액션 타입 주로 대문자로 작성*/

/* 액션 생성함수 정의 */

/* 리듀서 만들기 */
// function reducer(state = text, action){
//   return state
// }

function reducer(state = 크레오코리아는, action){
  return state
}

/* 스토어 */
let store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
         <Root />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
