import PropTypes from "prop-types";

import KakaoLogin from "react-kakao-login";
import { snsPayloadParser } from "../../utils/common";

const Kakao = (props) => {
  // const token = process.env.REACT_APP_KAKAO || '';
  const token = "42ae753baa9256a9ecadebbadd059e6d";
  console.log(props.success);

  const success = (payload) => {
    props.success(snsPayloadParser.KAKAO(payload));
  };

  const fail = (payload) => {
    props.fail(payload);
  };

  if (!token) return <>.env의 REACT_APP_KAKAO을 확인해주세요.</>;

  return (
    <>
      {props ? (
        "로그인 중"
      ) : (
        <KakaoLogin
          token={token}
          onSuccess={success}
          onFailure={fail}
          getProfile={true}
          render={(renderProps) => (
            <button onClick={renderProps.onClick}>Kakao Login</button>
          )}
        />
      )}
    </>
  );
};

Kakao.propTypes = {
  success: PropTypes.func.isRequired,
  fail: PropTypes.func.isRequired,
};

export default Kakao;
