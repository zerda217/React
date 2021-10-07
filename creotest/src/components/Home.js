import React from 'react'
import { Link } from 'react-router-dom';
import Button from './Button';
import Title from './Title';
import { useSelector } from 'react-redux';
import './Components.scss';

function Home() {

    const aboutCreo = useSelector( (크레오설명) => 크레오설명);

    return (
    
    <div>
        <Title>CREO KITCHEN</Title>
        <p>{aboutCreo}</p>  
        <img className="creoKitchen"
             src="https://w.namu.la/s/b8e7f427d377cdb94696db8eb193494f0f5b745abdf5e2577a89de80607e5aad0a8306842f9123eb6d265e72825c645c4f27c3c1fb6590cff420f50f473b650b56ca3d222ec64b63945887d2d4f07f118210e5d5478cc5684197e1f2e61394d1" 
             alt="creoKitchen" width="400px"/><br/>
        <div>
            <Link to = "/Profile/kitchen">
                <Button className="view">view more</Button>
            </Link>
        </div>
        <Title>HACCP ERP YESSUP</Title>
        <img className="Works" 
             src="https://mblogthumb-phinf.pstatic.net/20160106_209/kukjeart_inc_1452055876208XMVrB_JPEG/%C5%E4%B3%A2_%285%29.jpg?type=w800" 
             alt="Works" width="400px%"/>
        <div>
            <Link to = "/Profile/yessup">
                <Button theme="view">view more</Button>
            </Link>
        </div>
        <Title>SAHARA</Title>
        <img className="Works" 
             src="https://ww.namu.la/s/50ec79e07868dd8be7c62f3ca97267517b4f7b8d43b05470c645b336541fdd3593e3a3469a82a8c904f050382ff3c8551606ac7de623941d726582f74a03670a7f0972e3a8439ec9911ee60a1a5c76e1856d5e55e53a42f365f1c95a145ef612" 
             alt="Works" width="400px%"/>
        <div>
            <Link to = "/Profile/team">
                <Button theme="view">view more</Button>
            </Link>
        </div>
            

    </div>
    );
}

export default Home;