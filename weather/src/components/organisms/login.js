import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const initializeNaverLogin = () => {
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: "F8oA2QkCb9AOK3faofYo",
      callbackUrl: "http://localhost:3000/",
      isPopup: false,
      loginButton: { color: "green", type: 1, height: "47" },
      callbackHandle: true,
    });
    naverLogin.init();
  };

  const location = useLocation();
  const getNaverToken = () => {
    if (!location.hash) return;
    const token = location.hash.split("=")[1].split("&")[0];
    console.log(token);
  };

  useEffect(() => {
    initializeNaverLogin();
    getNaverToken();
  }, []);

  const { hostname, protocol } = window.location;

  // window.location.href.includes('access_token');
  // const location2 = window.location.href.split('=')[1];
  // const sns_auth = location2.split('&')[0];

  // initializeNaverLogin.getLoginStatus(async function(status) {
  //   if (status) {
  //     const userId = initializeNaverLogin.user.getEmail();
  //     const userName = initializeNaverLogin.user.getName();
  //     console.log(userId)
  //   }
  // })

  const userInfo = () => {
    axios
      .get(`https://openapi.naver.com/v1/nid/me`)
      .then(function (response) {
        console.log("성공", response);
      })
      .catch(function (error) {
        console.log("실패");
      });
  };

  return (
    <div>
      login
      <p style={{ border: "1px solid red" }} id='naverIdLogin' />
      <div style={{ border: "1px solid red" }} onClick={userInfo}>
        유저 정보
      </div>
    </div>
  );
};

export default Login;
