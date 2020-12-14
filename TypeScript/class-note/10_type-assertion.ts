// 타입 단언(type assertion)
// 내가 정의한 타입으로 간주한다.
var test;
test = 20;
test = 'a';
// test가 string으로 바뀌고 b가 string 타입이 된다.
var b = test as string;

// DOM API 조작
// <div id="app">hi</div>
var $div = document.querySelector('div');
if ($div) {
  $div.innerText = 'test';
}

// div tag 아님 null값이 들어갈 수 있는데, 무조건 div tag가 있을거라 단언을 해준다.
var $div = document.querySelector('div') as HTMLDivElement;
$div.innerHTML = 'test';