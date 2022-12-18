import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

const GlobalStyle: FunctionComponent = () => {
  return <Global styles={defaultStyle} />
}

const defaultStyle = css`
  @font-face {
    font-family: 'Noto Sans KR';
    src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700;900&display=swap')
      format('woff');
    font-style: normal;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap')
      format('woff');
    font-style: normal;
    unicode-range: U+0041-005A, U+0061-007A;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }

  html,
  body,
  #__gatsby {
    height: 100%;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`

export default GlobalStyle
