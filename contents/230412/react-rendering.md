---
date: '2023-04-12'
title: '리액트에서의 렌더링'
categories: ['react', 'rendering']
summary: '리액트의 렌더링 과정'
thumbnail: './react-rendering.png'
---

## TL;DR

- 리액트에서 렌더링이란, 컴포넌트가 현재 props와 state의 상태를 기반으로 UI를 어떻게 구성할지 컴포넌트에게 요청하는 것을 말한다.
- 렌더링은 두 단계로 나뉜다. 첫번째 단계는 `render`이고, 두번째 단계는 `commit`이다.
- 리액트에서 렌더링을 최적화 하기 위해서 여러 방법이 존재한다.
- ContextAPI는 상태관리를 위한 것이 아니다.
- 복잡한 상태관리를 위해서는 Redux, MobX, Recoil 등의 라이브러리를 사용하는 것이 좋다.

## 리액트에서의 렌더링

리액트에서 렌더링이란, 컴포넌트가 현재 props와 state의 상태를 기반으로 UI를 어떻게 구성할지 컴포넌트에게 요청하는 것을 말한다.

### 렌더링 과정

렌더링이 일어나는동안 리액트는 루트 컴포넌트부터 아래쪽으로 훑어가며 업데이트가 필요하다고 플래그가 지정되어있는 컴포넌트를 찾는다. 만약 찾았다면 클래스 컴포넌트의 경우 `classComponentInstance.render()`를 호출하고 함수 컴포넌트의 경우 `FunctionComponent()`를 호출하고 반환된 결과를 가지고 렌더링을 진행한다.

렌더링의 결과물은 일반적으로 JSX문법으로 구성되어 있으며, 이를 `React.createElement()`를 통해 `ReactElement`로 변환한다. `createElement`는 `ReactElement`를 생성하는 함수이며, `ReactElement`는 리액트가 렌더링을 위해 사용하는 가상돔이다.

```jsx
// JSX
return <Hello a={42} b="hello">{children}</Hello>

// createElement
return React.createElement(Hello, {a: 42, b: "hello"}, children)

// ReactElement
{
  $$typeof: Symbol(react.element),
  type: Hello,
  key: null,
  ref: null,
  props: {
    children: children,
    a: 42,
    b: "hello"
  }
}
```

전체 컴포넌트에서 `ReactElement`를 생성하고, 가상돔과 비교하여 실제 돔에 반영하는 과정을 거친다. 이 과정을 `reconciliation`이라고 한다.

## 렌더와 커밋

리액트에서 렌더링은 두 단계로 나뉜다. 첫번째 단계는 `render`이고, 두번째 단계는 `commit`이다.

`render`는 컴포넌트의 상태가 변경되었을 때, 새로운 가상돔을 생성하는 단계이다. 이 단계에서는 가상돔을 생성하는 것이 전부이며, 실제 돔에 반영되지 않는다.

`commit`은 `render`에서 생성된 가상돔을 실제 돔에 반영하는 단계이다. 이 단계에서는 실제 돔에 반영되는 것이 전부이며, 가상돔은 생성되지 않는다.

`commit`이후 요청된 DOM노드 및 컴포넌트 인스턴스에 대한 참조를 업데이트한다. 그런다음 클래스 컴포넌트의 경우 `componentDidMount`, `componentDidUpdate`를 호출하고, 함수 컴포넌트의 경우 `useLayoutEffect`를 호출한다.

리액트는 timeout을 세팅한 이후 만료되면 `useEffect`를 호출한다. 이는 `useEffect`가 렌더링이 완료된 이후에 호출되어야 한다는 것을 의미한다.

React18버전의 `Concurrent Mode`에서는 브라우저가 이벤트를 처리할 수 있도록 렌더링 단계에서 일부 작업을 중단할 수 있다. 리액트는 렌더링을 중단하고, 브라우저가 이벤트를 처리할 수 있도록 브라우저에게 제어권을 넘긴다. 이후 브라우저가 이벤트를 처리할 수 있을 때, 리액트는 렌더링을 다시 시작한다.

## 최초 렌더링 이후

최초 렌더링 이후에 리액트가 리렌더링을 하는 대표적인 경우는 다음과 같다.

### Class Component

- `setState`가 호출되었을 때
- `forceUpdate`가 호출되었을 때

### Function Component

- `useState`의 setter가 호출되었을 때
- `useReducer`의 dispatch가 호출되었을 때

### 일반적인 경우

- 부모 컴포넌트가 리렌더링 되었을 때
- Context의 값이 변경되었을 때

일번적으로 `props`가 변경되었는지 신경쓰지 않고, 부모 컴포넌트가 리렌더링 되었을 때 자식 컴포넌트도 리렌더링 되도록 구현되어있다.

하지만, 렌더링이 일어나더라도 `reconciliation` 과정에서 실제 돔에 반영되지 않을 수 있다.

Context와 관련된 이야기는 아래에서 따로 다루겠다.

## fiber

리액트는 어플리케이션에 존재하는 현재 컴포넌트 인스턴스를 추적하는 데이터 구조를 가지고 있는데, 이 데이터의 핵심적인 부분은 `fiber`라는 객체이다.

`fiber`가 가지고 있는 정보는 다음과 같다.

- 컴포넌트 타입의 정보
- 컴포넌트의 props, state
- 컴포넌트의 부모, 자식, 형제에 대한 참조
- 렌더링 추적을 위한 메타데이터

## 렌더링 최적화

### shouldComponentUpdate

`shouldComponentUpdate`는 컴포넌트가 리렌더링 되기 전에 호출되는 함수이다. 이 함수는 `true`를 반환하면 리렌더링을 진행하고, `false`를 반환하면 리렌더링을 중단한다.

`shouldComponentUpdate`는 `PureComponent`를 사용하면 자동으로 구현되어있다. `PureComponent`는 `shouldComponentUpdate`를 구현한 컴포넌트이다.

`shouldComponentUpdate`는 `props`와 `state`를 비교하여 리렌더링 여부를 결정한다. `props`와 `state`가 변경되지 않았다면 리렌더링을 진행하지 않는다.

`shouldComponentUpdate`는 `props`와 `state`를 얕은 비교를 통해 비교한다. 즉, `props`나 `state`가 객체나 배열이라면, 객체나 배열의 참조값만 비교한다.

```jsx
class Hello extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.a !== nextProps.a || this.props.b !== nextProps.b
  }
  render() {
    return <div>Hello</div>
  }
}
```

### React.memo

`React.memo`는 함수형 컴포넌트에 `shouldComponentUpdate`를 적용할 수 있게 해준다.

```jsx
const Hello = React.memo(function Hello(props) {
  return <div>Hello</div>
})
```

### React.useMemo

`React.useMemo`는 함수형 컴포넌트에서 `shouldComponentUpdate`를 적용할 수 있게 해준다.

```jsx
const Hello = function Hello(props) {
  const a = useMemo(() => {
    return 1
  }, [])
  return <div>Hello</div>
}
```

### React.useCallback

`React.useCallback`은 함수를 캐싱할 수 있게 해준다.

```jsx
const Hello = function Hello(props) {
  const onClick = useCallback(() => {
    console.log('Hello')
  }, [])
  return <div onClick={onClick}>Hello</div>
}
```

### React.useLayoutEffect

`React.useLayoutEffect`는 `React.useEffect`와 동일하게 작동하지만, 렌더링이 완료된 후에 실행되는 `React.useEffect`와 달리 렌더링이 완료되기 전에 실행된다.

```jsx
const Hello = function Hello(props) {
  useLayoutEffect(() => {
    console.log('Hello')
  }, [])
  return <div>Hello</div>
}
```

## Context

React의 ContextAPI는 `Provider`내부에 있는 컴포넌트들에게 `value`를 전달해주는 기능을 제공한다.

`Provider`의 `value`가 변경되면, `Provider`의 모든 자식 컴포넌트들은 리렌더링 된다.

```jsx
const ThemeContext = React.createContext('light')

function App() {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar
        changeTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
    </ThemeContext.Provider>
  )
}

function Toolbar({ changeTheme }) {
  return (
    <div>
      <ThemedButton />
      <button onClick={changeTheme}>change theme</button>
    </div>
  )
}

function ThemedButton() {
  const theme = useContext(ThemeContext)
  return <Button theme={theme} />
}
```

## Context와 상태관리 라이브러리

Context의 `value`가 변경되면, `Provider`의 모든 자식 컴포넌트들은 리렌더링 된다. 이는 불필요한 리렌더링을 발생시킬 수 있다. 이를 해결하기 위해 상태관리 라이브러리를 사용할 수 있다.

### ContextAPI만으로 충분한 경우

- Context의 `value`가 변경되지 않는 경우
- Context의 `value`가 자주 변경되지 않는 경우
- 추가적인 라이브러리를 사용하고 싶지 않은 경우

### 상태관리 라이브러리가 필요한 경우

- 어플리케이션의 상태가 많은 경우
- 상태가 시간에 따라 변화하는 경우
- 상태 관리 로직이 복잡한 경우
- 어러 개발자가 동시에 작업하는 경우

## 참조

- [리액트의 렌더링은 어떻게 일어나는가?
  ](https://yceffort.kr/2022/04/deep-dive-in-react-rendering)
