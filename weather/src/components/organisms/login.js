import {useEffect} from 'react'

const Login = () => {
  const initializeNaverLogin = () => {
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: 'F8oA2QkCb9AOK3faofYo',
      callbackUrl: 'http://localhost:3000/', 
      isPopup: false,
      loginButton: { color: 'black', type: 3, height: '47' },
      callbackHandle: true,
    });
    naverLogin.init();
  };
        
  useEffect(() => {
    initializeNaverLogin();
  }, []);

  return (
    <div>login
    <p style={{border: '1px solid red'}} id='naverIdLogin'>
    </p></div>
  )
}

export default Login