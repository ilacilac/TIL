import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Footer from "../src/component/Footer";

// props
// Component : page
// pageProps : 데이터 패칭 메소드로 가져온 초기 객체
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

/**
 * _app.js
 * 페이지 전환 시, 레이아웃을 유지할 수 있다.
 * 페이지 전환 시 상태값을 유지할 수 있다.
 * componentDidCatch를 이용해서 커스텀 에러 핸들링을 할 수 있다.
 * 추가적인 데이터를 페이지로 주입시켜주는게 가능하다.
 * 글로벌 CSS를 이곳에서 선언한다.
 */
