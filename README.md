# REDUX
<pre>
   항상 아주 단순한예제로 시작한다.
   그래야지만 이해하기 쉽고 단계별로 응용했을때 어려움이없기때문이다.
</pre>

# Reducer
<pre>
    reducer 변화를 일으키는 함수 리듀서는 두가지 파라미터를 받아옴
    첫번째는 state
    두번째는 action
    리덕스는 불변성을 지키는게 원칙이므로
    첫번째 state 를 ...state 로 쓰고
    두번째 action 은 업데이트될 값이고 이걸 첫번째에 덮어 씌워줘야된다
</pre>

# Dispatch
<pre>
    액션을 발생시키는것 
    파라미터는 액션 객체를 전달

    dispatch(액션객체)

    계속 업데이트 될 예정
</pre>
