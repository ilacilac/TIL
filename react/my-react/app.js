// element => type & props를 객체 속성값으로 가지는 객체
// type : tagName, 노드 생성
// props : JSX의 key,value의 객체 => children
// children : 문자열 하나 => textNode 하나

// const element = <h1 title="foo">Hello</h1>;
// const element = React.createElement(
//   "h1",
//   {title: "foo"},
//   "Hello"
// )
const element = {
  type: "h1",
  props: {
    title: "foo",
    children: "Hello",
  },
};

const node = document.createElement(element.type);
node["title"] = element.props.title;

// element => React element
// node => DOM element
// ReactDOM.render(element, contianer);
const container = document.getElementById("root");

const text = document.createTextNode("");
text["nodeValue"] = element.props.children;

console.log(node); // <h1 title="foo"></h1>
console.log(text); // "Hello"

node.appendChild(text);
container.appendChild(node);

// git commit test
