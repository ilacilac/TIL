# Google IO

## Cascade Layers

구체적인 선언 / 셀렉터 순서를 생각하지 않더라도, 스타일링 우선순위를 결정할 수 있다.
Reset / Default / Frameworks / Component / Utilities / Overrides 와같이
레이어의 순서를 정하고, 레이어별로 스타일링을 해준다.
-> 재사용 / 독립적 컴포넌트 / 유지보수성

```css
/* 1. 레이어의 순서정의 */
@layer reset, default, patterns, components, utilities, overrides;

@import url("framework.css") layer(components.framework);

@layer utilities {
}

@layer default {
}
```

## @container

@media query -> 사용자의 윈도우 창에 맞게 전체적인 요소가 윈도우 사이즈에 의해 재배치 할 수 있음
@container -> 개별적인 부모를 기반으로 아이템을 재배치 할 수 있다.

```css
.card_holder {
  container-type: inline-size;
  container-name: card-holder;
}

.card {
  display: flex;
  flex-direction: row;
}

@container card-holder (max-width: 200px) {
  .card {
    flex-direction: column;
  }
}
```

## accent-color

기본적인 스타일링(ex : checkbox)할 때 간편하게 할 수 있음
컴포넌트의 위치한 배경색상과 대비되는 색상으로 적용됨(웹접근성 용이)

## color-contrast

배경색에 따라 글자색상이 달라짐

## @nest

부모 / 자식관계 -> SASS 대체

## @scope

스타일링이 다른 컴포넌트가 충돌나지않게 scope로 감싸준다 -> CSS Module 대체
