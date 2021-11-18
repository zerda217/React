// firebase.utils.js 파일 새롭게 생성하기
import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD9RHG4Im12B7GflHUco7hwAZiAX0Z0rwo",
  authDomain: "zerda-6ade5.firebaseapp.com",
  databaseURL: "https://zerda-6ade5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "zerda-6ade5",
  storageBucket: "zerda-6ade5.appspot.com",
  messagingSenderId: "866521777440",
  appId: "1:866521777440:web:fbfe2e62e0e749f67ec345",
  measurementId: "G-DLXW67L3KP"
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// GoogleAuthProvider 클래스를 authentication 라이브러리에서 사용할 수 있도록 불러오는 코드.
provider.setCustomParameters({prompt: 'select_account'});
// signIn이랑 authentication을 위해서 GoogleAuthProvider를 사용할 때마다 구글 팝업을 항상 띄우기를 원한다는 의미이다.
export const signInWithGoogle = () => auth.signInWithPopup(provider);
// signInWithPopup 메소드는 여러 파라미터를 받을 수 있다. 트위터, 페이스북, 깃허브 등으로도 로그인이 필요할 수도 있으므로.
// 여기에서는 google로 signIn할 것이기 때문에, 파라미터로 위에서 정의한 provider를 넣어준다.

export default firebase;
// 혹시 전체 라이브러리가 필요할지도 모르기 때문에 firebase도 export 해준다.