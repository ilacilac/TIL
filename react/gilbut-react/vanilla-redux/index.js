import { createStore } from 'redux';

// DOM
const $divToggle = document.querySelector('.toggle');
const $counter = document.querySelector('h1');
const $btnIncrease = document.querySelector('#increase');
const $btnDecrease = document.querySelector('#decrease');

// 액션 : 상태에 변화를 일으키는 것
// 액션 이름 정의
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 생성 함수
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 초깃값
const initialState = {
  toggle: false,
  counter: 0
};

// 리듀서 : 변화를 일으키는 함수 
// params : (state, action)
function reducer(state = initialState, action) {
  switch(action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const render = () => {
  const state = store.getState();

  if (state.toggle) {
    $divToggle.classList.add('active');
  } else {
    $divToggle.classList.remove('active');
  }

  $counter.innerText = state.counter;
};

render();
store.subscribe(render);

// dispatch : 액션 발생시키기 
$divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};
$btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};
$btnDecrease.onclick = () => {
  store.dispatch(decrease());
};