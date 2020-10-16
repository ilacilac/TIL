# Mongoose를 이용한 MongoDB연동

## 관계형 데이터베이스(RDBMS => MySQL, OracleDB, PostgreSQL)의 한계점

1. 데이터 스키마가 고정적이다.
   데이터 스키마란 데이터베이스에 어떤 형식의 데이터를 넣을지에 대한 정보를 가리킨다.
   ex) 회원정보 스키마라면 계정명, 이메일, 이름 등이 있고
   새로 등록하는 데이터 형식이 기존에 있던 데이터들과 다르다면 기존 데이터를 모두 수정해야 새 데이터를 등록 할 수 있다.
2. 확장성
   RDBMS(관계형 데이터베이스)는 저장하고 처리해야 할 데이터양이 늘어나면 여러 컴퓨터에 분산시키는 것이 아니라 해당 데이터베이스 서버의 성능을 업그레이드 하는 방식으로 확장해 주어야 했다.

MongoDB는 이런 한계를 극복한 문서 지향적 NoSQL 데이터 베이스이다.



## 문서

여기서 말하는 문서는 RDBMS의 레코드와 개념이 비슷하다.
문서의 데이터 구조는 한 개 이상의 키-값 쌍으로 되어 있다.
문서는 BSON(바이너리 형태의 JSON) 형태로 저장된다.

컬렉션 : 여러 문서가 들어가있는 곳

MongoDB는 다른 스키마를 가지고 있는 문서들이 한 컬렉션에서 공존 할 수 있다.



## MongoDB 구조

서버 하나에 데이터베이스를 여러 개 가지고 있을 수 있다.
각 데이터베이스에는 여러 개의 컬렉션이 있고,
컬렉션 내부에는 문서들이 있다.



## mongoose

Node.js 환경에서 사용하는 MongoDB 기반 ODM(Object Data Modeling) 라이브러리
데이터베이스 문서들을 자바스크립트 객체처럼 사용할 수 있게 해준다.

```bash
$ yarn add mongoose dotenv
```

dotenv는 환경변수들을 파일에 넣고 사용할 수 있게 하는 개발 도구이다.

mongoose를 이용하여 서버와 데이터베이스를 연결할 때는 mongoose의 connect 함수를 사용한다.

스키마를 만들때는 mongoose 모듈의 Schema를 사용하여 정의한다.
그리고 각 필드 이름과 필드의 데이터 타입 정보가 들어 있는 객체를 작성한다.

```js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String],
  publishedDate: {
    type: Date,
    default: Date.now,
  },
});

```

Schema에서 기본적으로 지원하는 타입

| 타입                            | 설명                                         |
| ------------------------------- | -------------------------------------------- |
| String                          | 문자열                                       |
| Number                          | 숫자                                         |
| Date                            | 날짜                                         |
| Buffer                          | 파일을 담을 수 있는 버퍼                     |
| Boolean                         | true or false                                |
| Mixed(Schema.Types.Mixed)       | 어떤 데이터도 넣을 수 있는 형식              |
| ObjectId(Schema.Types.ObjectID) | 객체 아이디. 주로 다른 객체를 참조할 때 넣음 |
| Array                           | 배열 형태의 값으로 []로 감싸서 사용          |



## 모델 생성

모델을 만들 때는 mongoose.model 함수를 사용한다.