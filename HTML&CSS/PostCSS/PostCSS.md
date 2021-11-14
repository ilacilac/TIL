css 전처리기
기본적인 css만으로는 중복적으로 작성해야하고 브라우저 호환성으로
반복적인 작업을 해야하므로 중복되는 코드 작성을 최소하기위해서
나왔다.

ex) less, sass, stylus

PostCSS에는 플러그인이 많다.

```jsx
import styles from './button.module.css';

return (
    <div classNmae={styles.text}>text</div>
)
```

