// JSX
// const element = (
//   <div id="foo">
//     <a>bar</a>
//     <b />
//   </div>
// );

// const element = React.createElement(
//   "div",
//   {id, "foo"},
//   React.createElement("a", null, "bar"),
//   React.createElement("b")
// )

const container = document.getElementById("root");

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      // children, // string, number ... 기본타입의 값 =>객체가 아닌 모든것들을 감싸서 TEXT_ELEMENT 타입으로 생성 할 수 있음
      children: children.map((child) =>
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function render(element, container) {
  const dom =
    element.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type);

  const isProperty = (key) => key !== "children";
  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = element.props[name];
    });

  element.props.children.forEach((child) => render(child, dom));

  container.appendChild(dom);
}

const Didact = {
  createElement,
  render,
};

// const element = Didact.createElement(
//   Didact.createElement("a", null, "bar"),
//   Didact.createElement("b")
// );
// console.log(element);
/** @jsx Didact.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
);

// ReactDOM.render(element, contaiener);
Didact.render(element, container);
