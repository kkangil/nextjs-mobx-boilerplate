
# next-mobx-boilerplate


## Key Features
- [Nextjs](https://nextjs.org/)
- [MobX](https://mobx.js.org/)
- [async/await](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function)
- [pm2 ecosystem](http://pm2.keymetrics.io/docs/usage/environment/)

## Getting Started

### Development
```sh
yarn

yarn dev
```

### Deploy
- 동일한 배포환경을 유지하기 위해 pm2의 ecosystem 을 사용
- ecosystem.config.js 에 환경변수 설정 <테스트서버 (env_public-develop), 운영(env_production)>
```sh
yarn build && yarn start
```

## 폴더 구조
- actions : superagent를 이용한 API 호출
- components : page view
- pages : next의 router에 해당하는 폴더 (container의 역할)
- stores : mobx store 관리

## Tips
### nextjs
**pages**
- pages 폴더의 파일또는 폴더는 url로 매칭됩니다.
- 예) posts 폴더 내부의 detail 파일 -> /post/detail
**_app.js**
- _app.js는 react의 App.js와 같은 역할입니다. (즉 최상단 component)
- _app.js 에서 `componentDidCatch` life-cycle을 사용해 render 에러 발생시 빈화면이 보여지지 않도록 막아줍니다.

**_document.js**
- _document.js 는 html 태그로 감싸진 document 그 자체 파일입니다.
- pages에 존재하는 모든 페이지에 설정값을 줄 수 있는 파일입니다.

**_error.js**
- nextjs 에러 발생 시 실행되는 파일입니다.
- 주로 404로 이용합니다.

<hr/>

### mobx store
- mobx store의 변수를 다른 page/component 에서 사용하기 위해 @observable 설정
- mobx store의 값을 변경해 주려면 @action 사용
- stores/index constructor 에서 store 인스턴스 생성

### store 연결 방법
1. import inject, observer from 'mobx-react'
2. import `high order component`
3. @ decorater를 사용해서 원하는 store 연결
4. , 로 여러개 store inject 가능
```sh
@withData
@inject('sampleStore')
@observer
export default class Post extends Component {
```

* @ 연결 순서 맞춰야 합니다.

### API call
- 기본적으로 `getInitialProps` next cycle을 사용합니다. (제일 처음 호출되는 life-cycle)
* 서버/클라이언트 구분하기 위해 props의 isServer를 사용합니다. isServer가 true인 경우 서버사이드 isServer가 false인 경우 클라이언트 사이드
- `getInitialProps`로 API 호출하는 경우 데이터는 props에 담겨옵니다.
- 서버사이드와 클라이언트사이드의 리턴되는 api 값이 다릅니다.(body) -> 추후 확인필요
- window 객체를 사용해야하는경우 (ex. localstorage 데이터 사용)은 `getInitialProps` cycle을 사용하지 않고 react의 life-cycle 을 사용해 줘야합니다.
  
### async/await
- async/await 구조 사용 및 try/catch 구문을 사용합니다.
- API의 에러메시지를 사용려면 response body의 errorMessage를 사용합니다.
