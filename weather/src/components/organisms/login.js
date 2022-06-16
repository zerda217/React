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

    /* (4) Callback의 처리. 정상적으로 Callback 처리가 완료될 경우 main page로 redirect(또는 Popup close) */
		window.addEventListener('load', function () {
			naverLogin.getLoginStatus(function (status) {
				if (status) {
					/* (5) 필수적으로 받아야하는 프로필 정보가 있다면 callback처리 시점에 체크 */
					var email = naverLogin.user.getEmail();
					console.log(email); // 사용자 이메일 정보를 받을수 있습니다.
            		console.log(naverLogin.user); //사용자 정보를 받을수 있습니다.
                    if( email === undefined || email == null) {
						alert("이메일은 필수정보입니다. 정보제공을 동의해주세요.");
						/* (5-1) 사용자 정보 재동의를 위하여 다시 네아로 동의페이지로 이동함 */
						naverLogin.reprompt();
						return;
					}

					window.location.replace("http://" + window.location.hostname + ( (location.port===""||location.port===undefined)?"":":" + location.port) + "/sample/main.html");
				} else {
					console.log("callback 처리에 실패하였습니다.");
				}
			}
    )})
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
      <p id='naverIdLogin' />
      <div onClick={userInfo}>
        유저 정보
      </div>
    </div>
  );
};

export default Login;
