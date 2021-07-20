// JSX => props / type
// props => children(string, nodes[]), JSX attributes

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

// node / dom property / children (textnode / tag..)

/**
 *
 * @param {string} type
 * @param {(object|null)} props
 * @param  {...any} children
 */
function createElement(type, props, ...children) {
  // console.log("type", type);
  // console.log("props", props);
  // console.log("children", children);
  // console.log("-------------------");
  // debugger;
  return {
    type,
    props: {
      ...props,
      // children // string, number ... 기본타입의 값 =>객체가 아닌 모든것들을 감싸서 TEXT_ELEMENT 타입으로 생성 할 수 있음
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

// 2. render
// function render(element, container) {
//   const dom =
//     element.type === "TEXT_ELEMENT"
//       ? document.createTextNode("")
//       : document.createElement(element.type);
//   const isProperty = (key) => key !== "children";
//   Object.keys(element.props)
//     .filter(isProperty) // attr이 있는 element (not children)
//     .forEach((name) => {
//       // console.log("dom[name]", dom[name]);
//       // console.log("element.props[name]", element.props[name]);
//       dom[name] = element.props[name];
//     });

//   element.props.children.forEach((child) => render(child, dom));

//   container.appendChild(dom);
// }

// 4. fibers
/**
 * 작업 단위를 구조화하기 위해서 fiber tree 라는 자료구조가 필요하다.
 * element 하나당 하나의 fiber
 * 1. DOM에 element 추가
 * 2. 각 element의 children에 대해 fiber 생성
 * 3. 다음 작업단위 선택
 */
function createDom(fiber) {
  const dom =
    fiber.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(fiber.type);

  const isProperty = (key) => key !== "children";
  Object.keys(fiber.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = fiber.props[name];
    });

  return dom;
}

function render(element, container) {
  nextUnitOfWork = {
    dom: container,
    props: {
      children: [element],
    },
  };
}

let nextUnitOfWork = null;

// 3. 동시성 모드
// ?? requestIdleCallback => setTimeout 같은것, 메인 스레드가 대기 상태일 때, 브라우저가 콜백을 실행할것
/**
 * 작업을 더 작은단위로 나눈 다음,
 * 각 단위마다 브라우저가 어떤 작업이 필요할 경우, 렌더링 도중 끼어들 수 있게 해준다.
 */
function workLoop(deadline) {
  let shouldYield = false;
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    shouldYield = deadline.timeRemaining() < 1;
  }
  requestIdleCallback(workLoop);
}
requestIdleCallback(workLoop);

/**
 * 반복문을 시작하려면 작업단위를 설정해야한다.
 * @param {*} nextUnitOfWork
 */
function performUnitOfWork(nextUnitOfWork) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber);
  }

  if (fiber.parent) {
    fiber.parent.dom.appendChild(fiber.dom);
  }

  const elements = fiber.props.children;
  let index = 0;
  let prevSibling = null;

  while (index < elements.length) {
    const element = elements[index];

    const newFiber = {
      type: element.type,
      props: element.props,
      parent: fiber,
      dom: null,
    };

    if (index === 0) {
      fiber.child = newFiber;
    } else {
      prevSibling.sibling = newFiber;
    }

    prevSibling = newFiber;
    index++;
  }

  if (fiber.child) {
    return fiber.child;
  }
  let nextFiber = fiber;
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling;
    }
    nextFiber = nextFiber.parent;
  }
}

const Didact = {
  createElement,
  render,
};

// const element = Didact.createElement(
//   Didact.createElement("a", null, "bar"),
//   Didact.createElement("b")
// );

/** @jsx Didact.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
);

console.log("element", element);

// ReactDOM.render(element, contaiener);
// Didact.render(element, container);
