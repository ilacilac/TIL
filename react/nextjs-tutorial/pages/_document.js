import Document, { Html, Head, Main, NextScript } from "next/document";

/**
 * next에서 제공하는 document custom
 * 마크업정의를 건너띄고 페이지를 만들기 때문에
 * html, head, body를 사용할 때, 필수적으로 사용해야한다.
 *
 * app과 document역할은 다르다
 *
 * app은 global.css나 레이아웃을 잡는다.
 *
 * document는 서버에서 렌더링되고, onclick과 같은 이벤트핸들러는 작동하지 않는다.
 * css도 사용하지 않는다.
 */
class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
