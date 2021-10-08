import React, {useState} from 'react';
// import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Title from './Title';
import { Home, Team, Profile, Contact } from './';
import './Components.scss';

// function Nesting (  ) {
//   return (
//       <Router>
//         <div>
//           <ul className="reiter">
//             <li>
//               <Link to="/home"><button >Home</button></Link>
//             </li>
//             <li>
//               <Link to="/Contact"><button >Contact</button></Link>
//             </li>
//             <li>
//               <Link to="/Profile/kitchen"><button>Profile</button></Link>
//             </li>
//             <li><button >Home2</button></li>
//             <li><button >Contact2</button></li>
//             <li><button >Profile2</button></li>
//             {Home}
//           </ul>
//           <Switch>
//             <Route path="/home" component={Home} /> 
//             <Route path="/Contact" component={Contact} />
//             <Route path="/Profile/:title" component={Profile} />
//           </Switch>      
//           </div>
//       </Router>
//     );
//   }

function Creo() {
  const [goHome, setGohome] = useState( true )
  const [goContact, setGocontact] = useState( false )
  const [goTeam, setGoteam] = useState( false )

  const onClick1 = () => {
    setGohome( true )
    setGocontact( false )
    setGoteam( false )
  }

  const onClick2 = () => {
    setGohome( false )
    setGocontact( true )
    setGoteam( false )
  }

  const onClick3 = () => {
    setGohome( false )
    setGocontact( false )
    setGoteam( true )
  }

  return (
    <>
      <Title className="ABOUT CREO"></Title>
        <img className="aboutCreo" src="https://blog.creokorea.com//uploads/j_ae3930b51e.png" alt="ABOUT CREO"/>         
      <Title name = "크레오코리아 푸드테크 솔루션의 미래"/>
        <p>음식폐기물을 처리한 결과물을 비료/바이오 연료 등으로 재활용</p>
        <p>[자원&에너지 순환형 푸드테크 체인] 완성</p>
        <img className="foodTech" src=" " alt="FOOD TECH"/>
        <p>
        <button onClick={onClick1}>-클릭1-</button>
        <button onClick={onClick2}>-클릭2-</button>
        <button onClick={onClick3}>-클릭3-</button>
        <p>
        {/* {count} */}
        { goHome && <Home /> } 
        { goContact && <Contact /> }
        { goTeam && <Team /> }
        </p>
        </p>
        </>
    );
};

export default Creo;