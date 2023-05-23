---
date: '2023-05-23'
title: 'App dir'
categories: ['App dir', 'Next.js13']
summary: 'App dir Migration'
thumbnail: './app-dir.png'
---

# App dir Migration

팀내의 next.js 버전을 12에서 13으로 올리면서 새로운 next.js의 기능을 사용하고자 App dir을 사용하게 되었다.

이로 인해 점진적으로 pages 라우팅 방식을 app 라우팅 방식으로 변경하게 되었다.

팀내 프론트엔드 개발자들과 함께 보고 마이그레이션 하기위해 공부한 내용을 정리하였다.

# dependency

Next의 App Router 기능을 이용하기 위해선 아래와 같은 버전이 필요합니다.

### Node.js

최소 v16.8

### Next.js

최소 version 13.4

```bash
npm install next@latest react@latest react-dom@latest
```

### ESLint

ESLint를 사용중이라면, 아래와 같은 dependency를 추가하여야 합니다.

```bash
npm install -D eslint-config-next@latest
```

# Next Steps

공식문서에서 소개하는 업데이트를 완료한 후 다음 단계는 아래와 같습니다.

- [Upgrade new features](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#upgrading-new-features)
  - 개선된 Image 및 Link 컴포넌트와 같은 새로운 기능으로 업그레이드
- [Migrate from the `pages` to `app` directory](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#migrating-from-pages-to-app)
  - `pages` 에서 `app` 디렉토리로 점진적으로 마이그레이션

# Upgrade new features

Next.js 13버전에서는 새로운 기능과 규칙을 갖춘 App Router가 도입되었습니다. 새로운 라우터는 `app` 디렉토리에서 사용가능하며, `pages` 디렉토리와 공존합니다.

Next.js 13버전으로 업그레이드할 때 App Router는 필수가 아닙니다. `pages` 디렉토리에서도 새로운 Next의 기능을 사용할 수 있습니다.

## `<Image />`

Next.js 12버전에서 `next/future/image`로 임포트가 되어있는 Image 컴포넌트가 있다면, `next/image` 로 임포트 경로를 변경해야합니다.

Next.js 13버전이 되며 Image컴포넌트에서는 아래와 같은 개선사항이 있습니다.

- client-side JavaScript 코드량 감소
- 더 쉬운 이미지 extend 및 스타일 지정
- accessibility 향상
- 네이티브 브라우저 lazy loading

자세한 Image 컴포넌트의 사용 방법은 [Next공식문서](https://nextjs.org/docs/app/api-reference/components/image\)를 참고해주세요.

## `<Link>`

이제 Link 컴포넌트는 더이상 수동으로 `<a>` tag를 자식으로 둘 필요가 없습니다.

Next.js 13버전에서는 `<Link>`가 항상 `<a>` tag를 기본적으로 렌더하게 됩니다.

```tsx
import Link from 'next/link'

// Next.js 12: `<a>` has to be nested otherwise it's excluded
<Link href="/about">
  <a>About</a>
</Link>

// Next.js 13: `<Link>` always renders `<a>` under the hood
<Link href="/about">
  About
</Link>
```

자세한 Link 컴포넌트의 사용 방법은 [Next공식문서](https://nextjs.org/docs/app/api-reference/components/link)를 참고해주세요.

## `<Script>`

원활한 마이그레이션을 위해 몇 가지 변경이 필요합니다.

- 기존 \_document.[js,jsx,tsx]의 `beforeInteractive` 스크립트를 `app/layout.tsx` 로 이동합니다.
- `onLoad`, `onReady` 및 `onError` 핸들러는 Server Component에서 동작하지 않으므로, Client Component로 변경하거나 완전히 제거해야 합니다.

## next/font

next/font기능은 font 최적화에 도움을 줍니다.

하지만 현재(23.05.23)기준 storybook에서 지원하지 않으므로, storybook 공식 지원 시 마이그레이션이 필요합니다.

# Migrating from `pages` to `app`

App Router로 이동하는것은, 새로운 React의 기능(Server Components, Suspense …)을 사용하게 되는것입니다.

`app` 디렉토리와 `pages` 디렉토리는 의도적으로 동시에 작동하도록 설계되었으며, 이는 페이지단위의 점진적인 마이그레이션이 가능하도록 도와줍니다.

- `app` 디렉토리는 중첩 라우팅과 layouts를 제공합니다. [문서](https://nextjs.org/docs/app/building-your-application/routing)
- 중첩된 폴더구조로 라우팅을 정의하고, `page.[js,jsx,tsx]`를 통해 배포하게 됩니다.
- 각 라우터마다 [특수한 예약파일](https://nextjs.org/docs/app/building-your-application/routing#file-conventions)을 사용하게 됩니다. 주로 사용하게 될 예약파일은 `page.[js,jsx,tsx]` 와 `layout.[js,jsx,tsx]` 입니다.
  - `page.js` 를 사용해 라우팅 기능을 이용합니다.
  - `layout.js` 를 통해 UI를 공유하고 레이아웃을 정의하게 됩니다.
  - `.js` `.jsx` `.tsx` 확장자를 이용해 예약 파일을 사용할 수 있습니다.
- 컴포넌트, 테스트코드, 스타일시트등을 `app` 디렉토리에 포함시킬 수 있습니다.
- `getServerSideProps` 와 `getStaticProps` 같은 특수 함수들이 `app` 디렉토리에서 [새로운 API](https://nextjs.org/docs/app/building-your-application/data-fetching)로 대체됩니다.
- `pages` 디렉토리에서 사용중이던 예약파일 `_app` 과 `_document` 가 `app` 디렉토리에서 `layout` 으로 대체됩니다. [문서](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required)
- `_error` 예약파일이 `error` 로 대체됩니다. [문서](https://nextjs.org/docs/app/building-your-application/routing/error-handling)
- `404` 예약파일이 `not-found` 로 대체됩니다. [문서](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
- `pages/api/*` 는 아직 그대로 `pages` 디렉토리를 사용합니다.

### Step1: creating the `app` dir

최신버전의 Next.js(최소 13.4이상)을 설치한 후, root 또는 `src/` 아래에 `app` 디렉토리를 생성합니다.

### Step2: Creating a Root Layout

`app` 디렉토리 내부에 `layout.[js,jsx,tsx]` 를 생성합니다. 이는 [root layout](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required)이라 불리며 `app` 디렉토리 내부의 모든 파일에 적용됩니다.

```tsx
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

- `app` 디렉토리는 항상 root layout을 가져야합니다.
- root layout은 항상 `<html>` 과 `<body>` 태그를 정의해야합니다. Next.js에서는 자동으로 그들을 생성하지 않습니다.
- `<head>` 태그를 사용하기 위해서 [built-in SEO support](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)를 사용할 수 있습니다.

`**_document` 와 `_app` 의 마이그레이션\*\*

`app` 디렉토리의 `layout` 파일은 `app` 디렉토리 내부에서만 동작하고 기존의 `pages` 디렉토리에는 적용되지 않습니다. `pages` 디렉토리에서 `app` 디렉토리로 **마이그레이션이 완료된 이후** `_document` 와 `_app` 을 안전하게 삭제하여야 합니다.

만일, React Context providers를 사용중이라면 반드시 Client Component를 사용해야합니다.

### Step3: Migrating `next/head`

`pages` 디렉토리에서 `<Head>` 컴포넌트를 이용해 정의하던 meta 및 title등을 `app` 디렉토리에서 [built-in SEO support](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)를 이용해 정의하는것으로 변경하여야 합니다.

```tsx
// before
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>My page title</title>
      </Head>
    </>
  )
}
```

```tsx
// after
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Page Title',
}

export default function Page() {
  return '...'
}
```

모든 metadata의 옵션은 [링크](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)를 참고해주세요.

### Step4: Migrating Pages

- `app` 디렉토리에서는 모든 컴포넌트의 default값이 Server Components입니다. 이는 기존 `pages` 디렉토리에서 모든 컴포넌트의 default값이 Client Components인것과 가장 큰 차이점입니다.
- Data fetching 방식이 변경됩니다. [링크](https://nextjs.org/docs/app/building-your-application/data-fetching) // 추후 추가 문서 작성 필요해보임
- `page.[js,jsx,tsx]` 를 통해 라우팅이 제공됩니다.

| pages          | app                 | Route        |
| -------------- | ------------------- | ------------ |
| index.js       | page.js             | /            |
| about.js       | about/page.js       | /about       |
| blog/[slug].js | blog/[slug]/page.js | /blog/post-1 |

Vercel측에서는 아래와같은 순서로 마이그레이션을 추천합니다.

<aside>
💡 이 방식은 `pages` 디렉토리 방식과 가장 유사한 방법으로 빠르고 쉽게 마이그레이션 하는 방식입니다.

</aside>

1. default exported Page Component를 새로운 Client Component로 이동합니다.
2. 새로운 Client Component를 `app` 디렉토리 내 `page.js` 파일로 이동합니다.

**Step4-1: Create a new Client Component**

1. `app` 디렉토리 내에 새로운 Client Component를 생성하고 export합니다. (i.e. `app/home-page.tsx`) Client Component를 정의하기 위해서 코드 최상단에 `‘use client’` 구문을 추가합니다.(모든 import 전)
2. 기존 `pages/index.js` 에서 default export하던 컴포넌트를 `app/home-page.tsx` 로 옮깁니다.

```tsx
// app/home-page.tsx

'use client'

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.
export default function HomePage({ recentPosts }) {
  return (
    <div>
      {recentPosts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}
```

**Step4-2: Create a new page**

1. `app/page.tsx` 파일을 `app` 디렉토리 내부에 생성합니다. 이는 default로 Server Component가 됩니다.
2. Client Component인 `home-page.tsx` 를 import합니다.
3. 만일, `pages/index.js` 에서 data fetching이 이루어지고 있엇다면, [변경된 data fetching API](https://nextjs.org/docs/app/building-your-application/data-fetching)를 사용해 로직을 Server Component로 이동합니다. data fetching migration 가이드는 아래에서 자세히 설명 될 예정입니다.

```tsx
// Import your Client Component
import HomePage from './home-page'

async function getPosts() {
  const res = await fetch('https://...')
  const posts = await res.json()
  return posts
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const recentPosts = await getPosts()
  // Forward fetched data to your Client Component
  return <HomePage recentPosts={recentPosts} />
}
```

만약, 기존 page에서 `useRouter` hook을 사용중이였다면, 새로운 routing hooks로 변경해야합니다. [링크](https://nextjs.org/docs/app/api-reference/functions/use-router)

### Step 5: Migrating Routing Hooks

`app` 디렉토리에서의 새로운 동작을 위해 새로운 routing hook이 추가되었습니다.

`app` 디렉토리 내부에서는 `useRouter()` , `usePathname()` , `useSearchParams()` 세가지 새로운 훅을 반드시 `next/navigation` 에서 import 해야 합니다.

- 새로운 `useRouter` 훅은 `next/navigation` 에서 import되며, 기존 `pages` 디렉토리에서 `next/router` 를 통해 import 해오던 `useRouter`와 다른 동작을 가집니다.
  - `next/router` 를 통해 import 해오던 `useRouter`는 `app` 디렉토리에서 지원되지 않습니다. 하지만 `pages` 디렉토리에서는 계속 동작합니다.
- 새로운 `useRouter` 는 더이상 `pathname` string, `query` object를 반환하지 않습니다. 이를 이용하기 위해 `usePathname` 과 `useSearchParams` 를 사용해주세요.
- `usePathname` , `useSearchParams` 훅을 통해 페이지 변경을 감지할 수 있습니다.
- 당연하지만 `usePathname` , `useSearchParams` 훅은 Client Components에서만 동작합니다.

```tsx
'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export default function ExampleClientComponent() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // ...
}
```

추가적으로 새로운 `useRouter` 훅에서는 아래와 같은 기능들이 제거됩니다.

- `isFallback`
- `locale`, `locales`, `defaultLocales`, `domainLocales`
- `basePath`
- `asPath`
- `isReady`

### Step 6: Migrating Data Fetching Methods

기존 `pages` 디렉토리에서 사용하던 `getServerSideProps` , `getStaticProps` 는 `app` 디렉토리에서 `async` React Server Components와 `fetch()`를 사용하는 [simpler API](https://nextjs.org/docs/app/building-your-application/data-fetching)로 변경됩니다.

```tsx
// app/page.tsx
export default async function Page() {
  // This request should be cached until manually invalidated.
  // Similar to `getStaticProps`.
  // `force-cache` is the default and can be omitted.
  const staticData = await fetch(`https://...`, { cache: 'force-cache' })

  // This request should be refetched on every request.
  // Similar to `getServerSideProps`.
  const dynamicData = await fetch(`https://...`, { cache: 'no-store' })

  // This request should be cached with a lifetime of 10 seconds.
  // Similar to `getStaticProps` with the `revalidate` option.
  const revalidatedData = await fetch(`https://...`, {
    next: { revalidate: 10 },
  })

  return <div>...</div>
}
```

**Server-side Rendering (`getServerSideProps`)**

`pages` 디렉토리에서는, `getServerSideProps` 를 사용해 서버에서 data fetching을 진행하고, default export된 React Component에 props를 전달합니다. 페이지 초기 HTML 페이지가 미리 서버에서 준비되고, 브라우저에서 hydrating 됩니다.

```tsx
// `pages` directory

export async function getServerSideProps() {
  const res = await fetch(`https://...`)
  const projects = await res.json()

  return { props: { projects } }
}

export default function Dashboard({ projects }) {
  return (
    <ul>
      {projects.map(project => (
        <li key={project.id}>{project.name}</li>
      ))}
    </ul>
  )
}
```

`app` 디렉토리의 Server Components를 사용해 data fetching을 React Component 내부에서 진행할 수 있습니다. 이는 Client의 JavaScript를 적게 전송할 수 있고, 서버에서 HTML을 렌더할 수 있게 만들어줍니다.

`cache` 옵션을 `no-store` 로 설정할 경우, 데이터는 cache되지 않습니다. 이는 `pages` 디렉토리의 `getServerSideProps` 와 유사하게 동작합니다.

```tsx
// app/dashboard/page.tsx

// `app` directory

// This function can be named anything
async function getProjects() {
  const res = await fetch(`https://...`, { cache: 'no-store' })
  const projects = await res.json()

  return projects
}

export default async function Dashboard() {
  const projects = await getProjects()

  return (
    <ul>
      {projects.map(project => (
        <li key={project.id}>{project.name}</li>
      ))}
    </ul>
  )
}
```

기존 `pages` 디렉토리에서, `getServerSideProps`를 사용할 때 `req` 객채를 참조해 header, cookies를 접근했습니다.

```tsx
// `pages` directory

export async function getServerSideProps({ req, query }) {
  const authHeader = req.getHeaders()['authorization'];
  const theme = req.cookies['theme'];

  return { props: { ... }}
}

export default function Page(props) {
  return ...
}
```

`app` 디렉토리에서는 requset data에 접근하는 새로운 읽기전용 함수가 정의되었습니다.

- `headers()` , `cookies()` 를 통해 header와 cookie에 접근할 수 있습니다.

```tsx
// `app` directory
import { cookies, headers } from 'next/headers'

async function getData() {
  const authHeader = headers().get('authorization')

  return '...'
}

export default async function Page() {
  // You can use `cookies()` or `headers()` inside Server Components
  // directly or in your data fetching function
  const theme = cookies().get('theme')
  const data = await getData()
  return '...'
}
```

### SSG

현재 프로덕트에 SSG가 적용되어있지 않아 넘어갑니다. 추가적인 정보가 필요하면

[링크](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#static-site-generation-getstaticprops)를 참고해주세요.

### Step 7: Styling

`pages` 디렉토리에서는, `_app` 에서 global 스타일시트를 정의했지만, `app` 디렉토리에서는 layout, page, component에서 각각 적용할 수 있게 됩니다.

특히, 현재 사용하고있는 CSS-in-JS에 대한 사전 설정이 필요합니다.

사전 설정과 관련된 문서를 참고해주세요. [링크](https://nextjs.org/docs/app/building-your-application/styling/css-in-js)

## 참고

[Upgrading: App Router Migration](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration)

[Upgrading: Codemods](https://nextjs.org/docs/app/building-your-application/upgrading/codemods)

[Building Your Application: Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching)

[Functions: useRouter](https://nextjs.org/docs/app/api-reference/functions/use-router)
