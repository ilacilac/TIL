This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## Data fetching

### SSR

**getServerSideProps** : 요청 시, 데이터를 가져와야 하는 페이지를 미리 렌더링을 해야하는 경우
- req : `next/link`, `next/router`
  res -> props(pre-render) -> JSON (next에서 자동처리)
- HTML은 모든 요청에 대하여 생성
- 정적 생성보다 성능이 느림
- 서버측에서만 실행 (브라우저 X)


**getStaticPaths** : 페이지에 동적경로가 있고 `getStaticProps`를 하는경우 정적으로 생성할 경로목록을 정의
**getStaticProps** : 페이지를 렌더링하는데 필요한 데이터를 사용자용청에 앞서 빌드할 수 있음
- HTML은 빌드시 생성, 각 요청에서 재사용
- 사용자의 요청에 앞서 미리 렌더링 할 수 있는 페이지에 적합
- 클라이언트 측 렌더링과 함께 사용해서 추가적인 데이터 가져올 수 있음

### CSR

**useEffect**
**SWR**
