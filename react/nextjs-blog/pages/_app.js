import '../styles/global.css';
/*  
 App : 다른 모든 페이지에서 공통적으로 사용하는 최상위 구성요소
*/
export default function App({Component, pageProps}) {
  return <Component {...pageProps} />
}