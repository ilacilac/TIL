# Restful

- HTTP 통신을 효율적으로 잘 디자인 해서 할 수 있을까? 하고 고민하면서 고안해낸것

## 6가지조건

1. Client-server architecture

- 다양한 어플리케이션에 제공할 수 있어야 함

2. Statelessness (HTTP)

- 하나의 요청이 다른요청에 연결되어있으면 안된다.

3. Cacheability (HTTP)

- Cache가 가능하면 가능하게

4. Layered System

- Client가 서버가 얼마나 많든, 공통된 서버에서 제공하는 하나의 api를 사용할 수 있도록 layered system을 사용

5. Code on demand (option)

- Client가 원한다면, 수행할 코드를 client로 보내줄 수 있다.

6. Uniform interface (중요!)

- Restful을 결정짓는 중요한 요소
- 4가지특징

1. Resource Identification in request : Client가 이해할 수 있는 포맷으로 데이터를 보내줘야 한다.
2. Resource maipulation through representations
3. Self-descriptive message
4. Hypermedia as the engine of application state
