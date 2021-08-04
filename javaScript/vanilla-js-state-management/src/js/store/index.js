import actions from "./actions.js";
import mutations from "./mutations.js";
import state from "./state.js";
import Store from "./store.js";

export default new Store({
  actions,
  mutations,
  state,
});

/**
 * 1. 컴포넌트에서 store의 dispatch 메소드로 액션 수행
 * 2. store의 dispatch 메소드에서 정의되 액션을 이용하여 액션수행
 * 3. actions.js 에서 정의한 action은 commit 메소드를 불러온다.
 * 4. commit 메소드는 mutation을 불러와 실제 state 데이터에 변화를 일으킨다.
 * Component => Store => Action => Commit => Mutation
 * Component => Store => Action => Commit => Mutation => Set(Proxy) => stateChange => render
 */
