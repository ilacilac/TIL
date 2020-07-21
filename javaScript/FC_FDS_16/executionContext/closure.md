# 클로저

내부함수에서 외부함수의 지역변수에 접근 할 수 있다.

외부함수가 더이상 사용하지 않는경우에도
내부함수가 외부함수에 접근할 수 있다.

```js
function outter() {
  var title = 'coding everybody';
  return function() {
    alert(title);
  }
}
var inner = outter();
inner();
```

outter();를 실행한 결과 
return한 값을 inner변수에 담는다.
이 담겨있는 ineer();을 호출하게되면 
'coding everybody' 가 출력된다.

return했다는건 그 함수가 종료됬다는 뜻이다.

그럼에도 불구하고 inner을 호출하면
outter이 생을 마감했음에도 불구하고 
alert(title)구문을 실행한다.

외부함수는 이미 죽었는데 내부함수에서 이미 사라진 외부함수에 접근을 시도하고 있고 그 접근이 성공적으로 이루어지고있다.

**private variable :** 
어떠한 정보가있을때 아무나 수정하도록 하는것을 방지하기위한 변수

```js
function factory_movie(title) {
  return {
    get_title : function () {
      return title;
    }, 
    set_title : function (_title) {
      title = _title;
    }
  }
}
var ghost = factory_movie('Ghost in the shell');
var matrix = factory_movie('Matrix');
alert(ghost.get_title()); // Ghost in the shell
alert(matrix.get_title()); // Matrix
ghost.set_title('공각기동대');

alert(ghost.get_title()); // 공각기동대
alert(matrix.get_title()); // Matrix
```

내부함수를 내포하고있는 외부함수의 지역변수에 접근할 수 있다.

get_title호출하면, return title하는데
title은 매개변수에서 온다.

매개변수는 함수에 지역변수로 사용된다.

set_title 메소드는 _title을 매개변수로 받고 이 값이 결국 title이기 때문에
factory_movie의 매개변수 title을 변경한다.

ghost와 matrix는 똑같은 객체이지만 
그 객체가 가지고있는 get_title메소드가 접근하는 title이라는 외부함수의 변수가 갖고있는 값이 서로 다르다.

