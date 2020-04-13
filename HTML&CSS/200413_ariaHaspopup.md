# 0413

###  팝업 상태(`aria-haspopup="token"`)

https://github.com/lezhin/accessibility/tree/master/aria#aria-haspopup

`aria-haspopup` 속성은 요소에 연결되어 있는 팝업(메뉴, 대화상자 등) 정보를 제공합니다. 팝업은 다른 내용 위에 표시하는 블럭을 의미합니다. 팝업 유형은 `menu`, `listbox`, `tree`, `grid`, `dialog` 으로 제한되어 있기 때문에 의미가 정확하게 일치하는 경우에만 사용해야 합니다. 일반적으로 `menu`와 `dialog` 유형이 빈번하므로 많이 사용할 것입니다.

- true = menu
- menu : 링크목록
- Dialog : 상호작용요소 (버튼 / 폼)
- listbox : option
- tree : list, 접고 펼칠 수 있음
- Grid : 행과 열로 구성된 선택 가능한 위젯
  https://www.digitala11y.com/grid-role/



**aria-pressed="false"**
: aria-pressed 속성은 토글 버튼(button, role="button")이 눌린 상태를 표시합니다. 흔하게 사용하는 속성은 아닙니다. 이 속성을 사용하기 전에 input[type="radio"], input[type="checkbox"] 또는 aria-checked 또는 aria-selected 속성을 먼저 검토하는 것이 좋습니다

**aria-haspopup="dialog"**
: dialog(role) 팝업이 연결됨. 
dialog(role)는 상호작용 요소(버튼 또는 콘트롤)가 포함된 현재 문서의 하위창.

**role="dialog"**
: 대화상자 role="dialog"는 사용자 인터렉션이 필요한 현재 문서의 하위창(마치 윈도우 팝업)입니다. 사용자가 정보를 입력하거나 응답하도록 하는 내용(input, textarea, select, button)을 반드시 포함합니다.

**aria-modal="true"**
: 모달 스타일로 표시할 것인지 여부는 선택 사항입니다. 
모달 스타일로 처리하는 경우 aria-modal="true" 속성을 추가합니다.

```html
<li class="ediya-menu__item">
  <a href="#" role="button" aria-haspopup="dialog" aria-pressed="false">
    <figure>
      <img src="./images/jeju-green-tangerine-blossom.png" alt="" width="323" height="323">
      <figcaption>제주청귤 블라썸</figcaption>
    </figure>
  </a>
  
  <div class="ediya-menu__item--detail is-active" role="dialog" aria-modal="true" aria-labelledby="ediya-menu__item6">
    <h3 id="ediya-menu__item6" class="ediya-menu__item--name">제주청귤 블라썸<span lang="en">Jeju Green Tangerine Blossom</span></h3>
    <p>청귤의 새콤함이 복숭아, 포도 등의 다양한 과일향과 함께 어우러져 밸런스가 훌륭한 블렌딩티</p>
    <div class="ediya-menu__item--multi-column is-2">
      <dl>
        <dt>칼로리</dt>
        <dd>(202kcal)</dd>
        <dt>당류</dt>
        <dd>(46g)</dd>
        <dt>단백질</dt>
        <dd>(1g)</dd>
        <dt>포화지방</dt>
        <dd>(0.1g)</dd>
        <dt>나트륨</dt>
        <dd>(5mg)</dd>
        <dt>카페인</dt>
        <dd>(0mg)</dd>
      </dl>
    </div>
    <button type="button" class="button is-close-panel" title="닫기" aria-label="음료 정보 패널 닫기">
      <span aria-hidden="true">×</span>
    </button>
  </div>
</li>
```

