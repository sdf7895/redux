import { createStore } from "redux";

const lightDiv = document.getElementsByClassName("light")[0];
const switchButton = document.getElementById("switch-btn");

const counterHeadings = document.getElementsByTagName("h1")[0];
const plusButton = document.getElementById("plus-btn");
const minusButton = document.getElementById("minus-btn");

// **** 액션 타입 정의
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increment = (diff) => ({ type: INCREMENT, diff });
const decrement = () => ({ type: DECREMENT });

// **** 초깃값 설정
const initialState = {
  light: false,
  counter: 0
};

/*
  reducer 변화를 일으키는 함수 리듀서는 두가지 파라미터를 받아옴
  첫번째는 state
  두번째는 action
  리덕스는 불변성을 지키는게 원칙이므로
  첫번째 state 를 ...state 로 쓰고
  두번째 action 은 업데이트될 값이고 이걸 첫번째에 덮어 씌워줘야된다
*/
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, //기존의 값은 그대로 두면서
        light: !state.light // light 값 반전시키기 (즉 덮어쓰기)
      };
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + action.diff
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

const render = () => {
  const state = store.getState(); //현재상태를 가져옵니다
  const { light, counter } = state; //비구조화 할당
  if (light) {
    lightDiv.style.background = "green";
    switchButton.innerText = "끄기";
  } else {
    lightDiv.style.background = "gray";
    switchButton.innerText = "켜기";
  }
  counterHeadings.innerText = counter;
};

render();

store.subscribe(render);

/*
  dispatch : 액션을 발생시키는것 
  파라미터는 액션 객체를 전달

  dispatch(액션객체) 시작하면
  reducer 안에있는 action.type 에 맞는 case 로 들어가서 상태 관리 시작

*/
switchButton.onclick = () => {
  store.dispatch(toggleSwitch());
};

plusButton.onclick = () => {
  store.dispatch(increment(1));
};

minusButton.onclick = () => {
  store.dispatch(decrement());
};